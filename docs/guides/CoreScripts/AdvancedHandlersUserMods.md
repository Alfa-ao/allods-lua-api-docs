---
outline: deep
title: AdvancedHandlersUserMods
description: Документация по библиотеке управления событиями и реакциями AdvancedHandlersUserMods.lua
---

# AdvancedHandlersUserMods.lua

## Общее описание

`AdvancedHandlers.lua` (и `AdvancedHandlersUserMods.lua`) - библиотека управления событиями и реакциями. Реализует гибкое управление, удобную и оптимизированную регистрацию и фильтрацию.
Предоставляет пару классов: `advEvent` и `advReaction` для событий и реакций соответственно. Оба регистрируются как библиотеки в WidgetCore.

## Подключение в UIAddon

```xml
<?xml version="1.0" encoding="UTF-8"?>
<UIAddon>
    <ScriptFileRefs>
        <Item href="/Mods/SampleCommon/CoreScripts/ClassesImplementation.lua" />
        <Item href="/Mods/SampleCommon/CoreScripts/AdvancedHandlersUserMods.lua" />
    </ScriptFileRefs>
</UIAddon>
```

## Класс advEvent (События)

### Методы advEvent

#### Регистрация и дерегистрация

- `advEvent.RegisterEventHandler( self, handler, sysEvent, [filter], [flags] )` - зарегистрировать обработчик события.
- `advEvent.UnRegisterEventHandler( self, handler, sysEvent, [filter], [flags] )` - дерегистрировать обработчик события.
- `advEvent.RegisterEventHandlers( self, eventsTable )` - множественная версия регистрации.
- `advEvent.UnRegisterEventHandlers( self, eventsTable )` - множественная версия дерегистрации.

```lua
-- Пример регистрации одиночного обработчика
local function OnMyEvent( eventData )
    LogInfo( "Событие получено: ", eventData )
end

-- Контекст не передается (false), фильтр отсутствует, флаги отсутствуют
advEvent.RegisterEventHandler( false, OnMyEvent, "SCRIPT_MY_EVENT" )

-- Пример множественной регистрации
local handlersTable = {
    { OnMyEvent, "SCRIPT_MY_EVENT" },
    { OnAnotherEvent, "SCRIPT_ANOTHER_EVENT" }
}
advEvent.RegisterEventHandlers( false, handlersTable )

-- Дерегистрация
advEvent.UnRegisterEventHandler( false, OnMyEvent, "SCRIPT_MY_EVENT" )
```

#### Отправка событий

- `advEvent:SendEvent( sysEvent, [eventData] )` - послать глобальное событие. Асинхронная операция.
- `advEvent:SendEventUserMods( sysEvent, [eventData] )` - послать глобальное событие только пользовательским аддонам.
- `advEvent:SendEventLocal( sysEvent, [eventData] )` - послать локальное событие самому себе. Синхронная операция.

```lua
-- Отправка глобального события
advEvent.SendEvent( "SCRIPT_MY_EVENT", { value = 42, name = "test" } )

-- Отправка события только пользовательским аддонам
advEvent.SendEventUserMods( "SCRIPT_USER_EVENT", { data = true } )

-- Отправка локального события (своему окружению)
advEvent.SendEventLocal( "SCRIPT_LOCAL_MY_EVENT", { localData = 1 } )
```

#### Кадровые и отложенные вызовы

::: tip {no-title}
Функция `advEvent.DeferredCall` аналог [common.DelayedCall](/api/category/common/function.common.DelayedCall.md)
:::

- `advEvent:TriggerFrameHandler( self, handler )` - выполнить обработчик в конце текущего кадра.
- `advEvent:DeferredCall( self, handler, delayMs, [...] )` - выполнить обработчик с задержкой.
- `advEvent:CancelDeferredCall( callId )` - отменить выполнение обработчика с задержкой.

```lua
-- Выполнение в конце текущего кадра
advEvent.TriggerFrameHandler( false, function( elapsedMs, timeMs )
    LogInfo( "Кадр отрисован" )
end )

-- Отложенный вызов
local callId = advEvent.DeferredCall( false, function( msg )
    LogInfo( "Отложенное сообщение: ", msg )
end, 1000, "Привет через секунду" )

-- Отмена отложенного вызова
advEvent.CancelDeferredCall( callId )
```

### Фильтрация событий

Библиотека поддерживает фильтрацию событий. Количество реально зарегистрированных обработчиков минимизируется. Дерево фильтров обходится оптимизированно.
Поддерживается фильтрация по ключам (`string`) и значениям (`boolean`, `number`, `string`, `indexable userdata`).
**Важно:*- `WString` НЕ является indexable userdata и не поддерживается!

```lua
-- Фильтр по ключу и значению
local filter = {
    eventType = "damage",
    sourceId = 12345
}
advEvent.RegisterEventHandler( false, OnDamage, "SCRIPT_COMBAT_EVENT", filter )
```

### Флаги advEvent

Флаги определяют специальные опции для конкретного обработчика. Представляются в виде таблицы `key-boolean`.

- `cfilter` (по умолчанию `false`) - использовать клиентскую фильтрацию события.
- `sa` (по умолчанию `false`) - игнорировать контекст.
- `_local` (по умолчанию `false`) - указание, что обработчик является локальным.
- `frame` (по умолчанию `false`) - обработчик является обработчиком события кадра.

```lua
-- Использование флага клиентской фильтрации
local cFlags = { cfilter = true }
advEvent.RegisterEventHandler( false, OnFiltered, "SCRIPT_HEAVY_EVENT", { type = "rare" }, cFlags )

-- Использование флага локального события
local localFlags = { _local = true }
advEvent.RegisterEventHandler( false, OnLocal, "SCRIPT_LOCAL_ONLY", nil, localFlags )

-- Обработчик события кадра
local frameFlags = { frame = true }
advEvent.RegisterEventHandler( false, OnFrame, "IGNORED_NAME", nil, frameFlags )
```

## Класс advReaction (Реакции)

### Методы advReaction

- `advReaction.RegisterReactionHandler( self, handler, sysReaction, sourceWidget, flags )` - зарегистрировать обработчик реакции.
- `advReaction.UnRegisterReactionHandler( self, handler, sysReaction, sourceWidget, flags )` - дерегистрировать обработчик реакции.
- `advReaction.RegisterReactionHandlers( self, reactionsTable )` - множественная версия регистрации.
- `advReaction.UnRegisterReactionHandlers( self, reactionsTable )` - множественная версия дерегистрации.

```lua
-- При наличии виджета buttonWidget
-- Регистрация реакции на клик от конкретного виджета
local function OnButtonClick( reactionData )
    LogInfo( "Кнопка нажата" )
end

advReaction.RegisterReactionHandler( false, OnButtonClick, "OnClick", buttonWidget )

-- Множественная регистрация
local reactionsTable = {
    { OnButtonClick, "OnClick", buttonWidget, nil },
    { OnAnyClick, "OnClick", nil, { any = true } }
}
advReaction.RegisterReactionHandlers( false, reactionsTable )
```

### Флаги advReaction
- `sa` (по умолчанию `false`) - игнорировать контекст.
- `any` (по умолчанию `false`) - не фильтровать реакцию по источнику.
- `raw` (по умолчанию `false`) - не оборачивать виджет реакции в `TWidget`.

```lua
-- Реакция от любого источника
local anyFlags = { any = true }
advReaction.RegisterReactionHandler( false, OnGlobalClick, "OnClick", nil, anyFlags )

-- Игнорирование контекста
local saFlags = { sa = true }
advReaction.RegisterReactionHandler( false, OnClickNoCtx, "OnClick", buttonWidget, saFlags )
```

## О контексте (self)

Для корректной работы методов классов необходим контекст (`self`).
`advEvent` и `advReaction` поддерживают корректную передачу контекста в обработчики.

### Правила передачи контекста

- Если выполняется вызов метода из наследников `advEvent`/`advReaction` или метод связан с `TWidget`, контекст передается автоматически.
- Если контекст мешает, требуется явный запрет через флаг `sa`.
- Если нужно выполнить вызов в ином месте, следует использовать форму `libName.MethodName( context, ... )`.
- Если контекст не нужен, вместо него надлежит передать `false` (не `nil`).

### Запрещенные формы вызова

Форма `libName:MethodName( ... )` **ЗАПРЕЩЕНА**.
Такой вызов приведет к тому, что контекстом будет сама библиотека `advEvent` / `advReaction`, что может привести к ее порче.

### Исключения

Следующие методы используют контекст, но не поддерживают флаги:
- `advEvent:TriggerFrameHandler`
- `advEvent:DeferredCall`

На следующие методы контекст никак не влияет (может быть произвольным):
- `advEvent:SendEvent`
- `advEvent:SendEventUserMods`
- `advEvent:SendEventLocal`
- `advEvent:CancelDeferredCall`

Для этих методов рекомендуется всегда использовать форму `advEvent:MethodName( ... )`.

### Исполнение обработчиков
```lua
-- Исполнение generic обработчика при наличии контекста
handler( handlerContext, eventData )

-- Исполнение generic обработчика при отсутствии контекста
handler( eventData )

-- Исполнение обработчика события кадра при наличии контекста
frameHandler( handlerContext, elapsedMs, timeMs )

-- Исполнение обработчика события кадра при отсутствии контекста
frameHandler( elapsedMs, timeMs )
```

## Отладочный API

Отладочные глобальные функции доступны только при запуске с исходного кода.

- `LogRegisteredEvents()` - вывести в лог подробную информацию по всем зарегистрированным событиям.
- `LogRegisteredReactions()` - вывести в лог подробную информацию по всем зарегистрированным реакциям.
- `LogDeferredFunctions()` - вывести в лог информацию по отложенным вызовам функций.
- `ListenToEvent( ... )` - выводить в лог содержимое приходящих событий.
- `StopListenToEvent( ... )` - прекратить вывод в лог содержимого приходящих событий.
- `ListenToReaction( ... )` - выводить в лог содержимое приходящих реакций.
- `StopListenToReaction( ... )` - прекратить вывод в лог содержимого приходящих реакций.

```lua
-- Пример использования отладочного API
ListenToEvent( "SCRIPT_MY_EVENT", "SCRIPT_COMBAT_EVENT" )
ListenToReaction( "OnClick" )

-- Спустя некоторое время, для остановки трассировки
StopListenToEvent( "SCRIPT_MY_EVENT" )
StopListenToReaction( "OnClick" )

-- Вывод текущих зарегистрированных сущностей в лог
LogRegisteredEvents()
LogRegisteredReactions()
```