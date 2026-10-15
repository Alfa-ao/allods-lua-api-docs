---
outline: deep
title: WidgetBaseClasses
description: Документация по библиотеке базовых классов интерфейса WidgetBaseClasses.lua
---

# WidgetBaseClasses.lua

## Общее описание

`WidgetBaseClasses.lua` - библиотека базовых классов интерфейса. Предоставляет четыре базовых класса. Основное назначение - управление событиями и реакциями, хранение состояния, управление видимостью виджета.

Базово предоставляется возможность использовать по два набора событий / реакций: обрабатываемые всегда и обрабатываемые в активном состоянии. Однако можно добавить произвольное количество дополнительных наборов.

## Подключение в UIAddon

```xml
<?xml version="1.0" encoding="UTF-8"?>
<UIAddon>
    <ScriptFileRefs>
        <Item href="/Mods/SampleCommon/CoreScripts/ClassesImplementation.lua" />
        <Item href="/Mods/SampleCommon/CoreScripts/WidgetBaseClasses.lua" />
    </ScriptFileRefs>
</UIAddon>
```

## Список классов

- `advUIBasicElement` - бинарное состояние (`true` / `false`) хранимое в поле `active`, не управляет видимостью виджета.
- `advWidgetBasicElement` - бинарное состояние (`true` / `false`) хранимое в поле `active`, состояние управляет видимостью виджета (виден если активен).
- `advUIObjectMonitor` - произвольное состояние хранимое в поле `object`, активным считается все кроме `nil` (даже `false`), не управляет видимостью виджета.
- `advWidgetObjectMonitor` - произвольное состояние хранимое в поле `object`, активным считается все кроме `nil` (даже `false`), состояние управляет видимостью виджета (виден если активен).

::: tip {no-title}
Классы `advUIBasicElement` и `advUIObjectMonitor` можно использовать без виджета, если дополнительно наследоваться от `advEvent`.
:::

```lua
-- Простой не виджетный элемент, слушающий события через наследование от advEvent
Class( "myLogicElement", advUIBasicElement(), advEvent() )

function myLogicElement:Init()
    return advUIBasicElement.Init( self )
end
```

## О наборах событий и реакций

### Пассивные

- Регистрируются при инициализации объекта (в методе `Init`).
- Дерегистрируются при уничтожении объекта (в методе `Destroy`).
- Для использования необходимо в наследнике определить функции:
    - `GetPassiveEventHandlers()` - возвращает таблицу событий в формате `advEvent`.
    - `GetPassiveReactionHandlers()` - возвращает таблицу реакций в формате `advReaction`.

```lua
-- Пассивные обработчики регистрируются один раз при Init
function myWidget:GetPassiveEventHandlers()
    return {
        { self.OnSystemTick, "SCRIPT_SYSTEM_TICK" }
    }
end

function myWidget:GetPassiveReactionHandlers()
    return {
        { self.OnGlobalClick, "OnClick", nil, { any = true } }
    }
end
```

### Активные

- Регистрируются при смене состояния, если новое состояние активное.
- Для `*ObjectMonitor` классов при смене из активного в активное (изменился объект) производится перерегистрация (для потенциального обновления фильтров).
- Дерегистрируются при смене состояния, если новое состояние неактивное.
- Для использования необходимо в наследнике определить функции:
    - `GetActiveEventHandlers()` - возвращает таблицу событий в формате `advEvent`.
    - `GetActiveReactionHandlers()` - возвращает таблицу реакций в формате `advReaction`.

::: tip {no-title}
В `*ObjectMonitor` классах можно использовать состояние для фильтрации, гарантируется что оно установлено в актуальное значение до вызова.
:::

```lua
-- Активные обработчики регистрируются только в активном состоянии
function myWidget:GetActiveEventHandlers()
    return {
        { self.OnObjectUpdate, "SCRIPT_OBJECT_UPDATE", { id = self.object.id } }
    }
end

function myWidget:GetActiveReactionHandlers()
    return {
        { self.OnObjectClick, "OnClick", self.wtButton }
    }
end
```

### Пользовательские

- Регистрируются и дерегистрируются вручную.
- Дерегистрируются при уничтожении объекта (в методе `Destroy`).
- Определяются пользователем, для использования необходимо:
    - Определить в наследнике функцию `Get[name][Event/Reaction]Handlers()` возвращающую таблицу событий / реакций в формате `advEvent` / `advReaction`.
    - Создать пользовательскую группу вызвав метод `CreateCustomHandlersTable( name, isReaction )`.
    - Имя должно быть уникальным в рамках типа во всем дереве наследования класса.
- Будет автоматически создан метод `Toggle[name][Event/Reaction]Handlers( state )`.
- Для (де)регистрации использовать метод `Toggle[name][Event/Reaction]Handlers( state )`.
- Регистрируются (или перерегистрируются если уже были зарегистрированы) если `state` приводится к истине (все кроме `nil`, `false`).
- Дерегистрируются (или ничего не происходит если не зарегистрированы) если `state` приводится ко лжи (`nil`, `false`).

```lua
-- Определение пользовательской группы обработчиков
function myWidget:Init()
    -- Инициализация базового класса обязательно первой
    myWidget.super.Init( self )

    -- Создание пользовательской группы, имя уникально в дереве наследования
    self:CreateCustomHandlersTable( "Extra", false )
    self:CreateCustomHandlersTable( "Extra", true )

    return self
end

-- Возврат событий для группы Extra
function myWidget:GetExtraEventHandlers()
    return {
        { self.OnExtraEvent, "SCRIPT_EXTRA_EVENT" }
    }
end

-- Возврат реакций для группы Extra
function myWidget:GetExtraReactionHandlers()
    return {
        { self.OnExtraClick, "OnClick", self.wtExtraButton }
    }
end

-- Включение группы Extra
self:ToggleExtraEventHandlers( true )
self:ToggleExtraReactionHandlers( true )

-- Выключение группы Extra
self:ToggleExtraEventHandlers( false )
self:ToggleExtraReactionHandlers( false )
```

## Общие и специфические методы

В квадратных скобках перед именем тип метода:
- `[P]` - **Public**, публичный метод, можно вызывать откуда угодно.
- `[I]` - **Internal**, внутренний метод, можно вызывать из объекта.
- `[S]` - **System**, системный метод, вызывать не следует.

::: warning {no-title}
Запрета на вызов откуда бы то ни было нет, это рекомендация (или строгая рекомендация для `[S]`).
:::

### Методы

- `[P] Init()` - инициализация объекта.
    - В наследниках может иметь параметры, в базовом классе параметры не требуются.
    - Должен быть обязательно вызван при создании объекта класса.
- `[I] CreateCustomHandlersTable( name, isReaction )` - создание пользовательской группы событий / реакций.
    - Вызов обязательно должен быть после `Init` базового класса.
- `[P] Destroy()` - корректное уничтожение объекта.
    - Если объект это виджет, то он также будет уничтожен (будет вызван `DestroyWidget`).
- `[P] Activate( state, ... )` - смена состояния, новое состояние будет приведено к булевому значению. **Только для `*BasicElement`**.
    - **НЕ** рекомендуется использовать `Vararg`, оставлено только для совместимости и в дальнейшем будет убрано.
- `[P] Assign( state, ... )` - смена состояния, новое состояние будет использовано как есть. **Только для `*ObjectMonitor`**.
    - **НЕ** рекомендуется использовать `Vararg`, оставлено только для совместимости и в дальнейшем будет убрано.
- `[S] Toggle( state, ... )` - смена состояния.
    - **НЕ** рекомендуется использовать `Vararg`, оставлено только для совместимости и в дальнейшем будет убрано.
- `[S] ToggleCustom( activeChanged )` - сменилось состояние.
    - Параметр `activeChanged` устанавливается в `true` если сменилось состояние активности.
    - Для `*BasicElement` это любое изменение состояния.
    - Для `*ObjectMonitor` - при переходе от `nil` к не-`nil` и наоборот.
- `[P] Update( state, ... )` - обновление.
    - **НЕ** рекомендуется использовать параметры, оставлены только для совместимости и в дальнейшем будут убраны.
    - Выполнение каких-либо действий по обновлению. В базовом классе выполняется перерисовка тултипа.
    - В большинстве случаев этот метод необходимо переопределить в наследнике.
- `[S] AssembleTooltip( reactionData )` - собрать тултип по реакции.
- `[I] CallTooltip( reactionData )` - вызвать тултип.
- `[S] GetPassiveReactionHandlers`
- `[S] GetPassiveEventHandlers`
- `[S] GetActiveReactionHandlers`
- `[S] GetActiveEventHandlers`

```lua
-- Типичный сценарий жизненного цикла объекта
local widget = myWidget( parentWidget )
widget:Init()

-- Смена состояния (для BasicElement)
widget:Activate( true )

-- Смена состояния (для ObjectMonitor)
widget:Assign( someObject )

-- Принудительное обновление
widget:Update()

-- Уничтожение в конце жизни
widget:Destroy()
```

## Методы которые можно переопределять в наследниках

### `Init` / `Destroy`

- Обязательно требуется внутри явно вызвать метод базового класса.
- Для `Destroy` он обязан быть последним вызовом.

### `Toggle`

- Обязательно требуется внутри явно вызвать метод базового класса.
- Обязательно требуется вернуть булево значение - наличие изменений в состоянии.
- Настоятельно рекомендуется брать его из результата вызова метода базового класса.

### `ToggleCustom`
### `Update`
### `AssembleTooltip`
### `GetPassiveReactionHandlers`
### `GetPassiveEventHandlers`
### `GetActiveReactionHandlers`
### `GetActiveEventHandlers`

```lua
-- Пример корректного переопределения с вызовом базового класса
function myWidget:Init()
    -- Инициализация базового класса
    myWidget.super.Init( self )

    -- Дополнительная инициализация наследника
    self.customField = 0

    return self
end

function myWidget:Destroy()
    -- Очистка ресурсов наследника ДО вызова базового
    self.customField = nil

    -- Обязательный последний вызов базового класса
    return myWidget.super.Destroy( self )
end

function myWidget:Toggle( active )
    -- Вызов базового класса, результат сохраняется
    local changed = myWidget.super.Toggle( self, active )

    -- Дополнительная логика наследника
    if changed then
        LogInfo( "Состояние изменилось: ", active )
    end

    -- Возврат булева результата из базового
    return changed
end
```

## Пайплайн смены состояния

1. Вызов `Activate( newState, ... )` или `Assign( newState, ... )`.
2. Только для `BasicElement`: приведение `newState` к булевому значению.
3. Вызов `Toggle( newState, ... )`:
    - Если `newState == state`, то возврат `false`, иначе далее.
    - Установка состояния.
    - Только для `advWidget`: смена видимости виджета согласно состоянию.
    - Обновление активных событий / реакций согласно состоянию:
        - Если имеются какие-либо зарегистрированные активные события / реакции, то они дерегистрируются.
        - Если состояние активное, то:
            - При существовании вызываются `GetActiveEventHandlers` / `GetActiveReactionHandlers` для получения списков событий / реакций.
            - Выполняется регистрация полученных событий / реакций.
    - Вызов `ToggleCustom`.
    - Возврат `true`.
4. Если `Toggle` вернул `false`, то возврат `false`, иначе далее.
5. Возврат результата `Update( newState, ... )`.

## О работе с тултипами

В базовых классах определена пара функций: `CallTooltip` и `AssembleTooltip`.

- `CallTooltip` переопределять не рекомендуется.
- `AssembleTooltip` для работы тултипа переопределить необходимо.
- `CallTooltip` регистрируется как обработчик реакции наведения.
- `AssembleTooltip` возвращает таблицу описывающую тултип по данным реакции. Если тултип для реакции не требуется, то надлежит возвращать `false`.
- Возврат пустой таблицы тултипа (по умолчанию в базовых классах) при попытке вызова такого тултипа породит предупреждение.

```lua
-- Пример переопределения AssembleTooltip
function myWidget:AssembleTooltip( reactionData )
    -- Тултип для кнопки Close
    if reactionData.widget == self.wtClose then
        return {
            tooltip = TOOLTIP_SIMPLE,
            name = ToWs( "Закрыть" ),
            rect = reactionData.widget:GetRealRect()
        }
    end

    -- Тултип для кнопки Save
    if reactionData.widget == self.wtSaveToLog then
        return {
            tooltip = TOOLTIP_SIMPLEDESC,
            name = ToWs( "Сохранить" ),
            desc = ToWs( "Сохраняет текущее сообщение в файл лога" ),
            rect = reactionData.widget:GetRealRect()
        }
    end

    -- Тултип для реакции не требуется
    return false
end
```

## Специальные поля

- `active: boolean` - текущее состояние, только для `BasicElement`.
- `object: any` - текущее состояние, только для `ObjectMonitor`.
- `tipReaction: table (reactionData) or nil` - текущая активная реакция тултипа (при наличии).
- `__useShow: boolean` - флаг определяющий необходимо ли управлять видимостью виджета в зависимости от состояния. Крайне **НЕ** рекомендуется как либо с ним взаимодействовать.
- `__deriveHandlers: boolean (default false)` - флаг, если задан, то события / реакции честно наследуются.
    - Без этого флага список берется из результата первой подходящей `GetHandlers`.
    - С этим флагом список составляется методом мержа результатов всех `GetHandlers` в дереве наследования по направлению к корню.
    - Только по главным родителям, подробности смотри в описании библиотеки реализации классов.
    - Флаг должен быть задан в базовой таблице класса-наследника, до вызова `Init`.
    - Флаг должен задаваться только там, где он действительно необходим, снижает производительность.

```lua
-- Включение наследования обработчиков в классе-наследнике
-- Задается в таблице класса, до вызова Init
Class( "myWidget", advWidgetObjectMonitor(), { __deriveHandlers = true } )
```

## Пример полного класса

```lua
--[[
Класс простого окна с текстовым полем и парой кнопок
После инициализации начинает слушать событие SCRIPT_DEMO_MESSAGE
При приходе события с полем message являющимся WString открывает окно и выводит сообщение
Если окно уже открыто, то обновляет сообщение
Одна кнопка закрывает окно, другая пишет его в лог
Обе кнопки имеют тултип
Если виджет окна является ребенком mainForm, то инициализация может выглядеть так:
    messageWindow( mainForm.wtMessageWindow ):Init()
]]
Class( "messageWindow", advWidgetObjectMonitor() )

function messageWindow:Init()
    LogInfo( "Demo messageWindow Init" )
    return advWidgetObjectMonitor.Init( self )
end

function messageWindow:Update()
    if self.object then
        self.wtText:SetVal( "value", self.object )
    else
        self.wtText:ClearValues()
    end
end

function messageWindow:Close()
    return self:Assign()
end

function messageWindow:SaveToLog()
    LogInfo( self.object )
end

function messageWindow:OnExternalMessage( eventData )
    if eventData.message and IsWs( eventData.message ) then
        return self:Assign( eventData.message )
    end
end

function messageWindow:AssembleTooltip( reactionData )
    if reactionData.widget == self.wtClose then
        return {
            tooltip = TOOLTIP_SIMPLE,
            name = ToWs( "Закрыть" ),
            rect = reactionData.widget:GetRealRect()
        }
    elseif reactionData.widget == self.wtSaveToLog then
        return {
            tooltip = TOOLTIP_SIMPLEDESC,
            name = ToWs( "Сохранить" ),
            desc = ToWs( "Сохраняет текущее сообщение в файл лога" ),
            rect = reactionData.widget:GetRealRect()
        }
    end
    return false
end

function messageWindow:GetPassiveEventHandlers()
    return {
        { self.OnExternalMessage, "SCRIPT_DEMO_MESSAGE" }
    }
end

function messageWindow:GetActiveReactionHandlers()
    return {
        { self.CallTooltip, "button_over", self.wtClose },
        { self.CallTooltip, "button_over", self.wtSaveToLog },
        { self.Close, "button_pressed", self.wtClose },
        { self.SaveToLog, "button_pressed", self.wtSaveToLog },
    }
end
```