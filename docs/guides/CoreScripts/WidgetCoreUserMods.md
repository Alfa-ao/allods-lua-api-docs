---
outline: deep
title: WidgetCoreUserMods
description: Документация по библиотеке ядра системы виджетов WidgetCoreUserMods.lua
---

# WidgetCoreUserMods.lua

## Общее описание

`WidgetCoreUserMods.lua` - библиотека-ядро скриптовой части системы виджетов. Формирует и поддерживает дерево виджетов аддона в виде дерева таблиц `TWidget`, вводит новый тип `TWidget`.

**Важно:** если в аддоне имеются виджеты, не имеющие имени, то они и их дети в дерево не попадут и доступны не будут.

В данном документе под `RawWidget` понимается один из типов нативных виджетов, предоставляемых клиентом: `Widget_PanelSafe`, `Widget_ButtonSafe` и т.д.

## Подключение в UIAddon

```xml
<?xml version="1.0" encoding="UTF-8"?>
<UIAddon>
    <ScriptFileRefs>
        <Item href="/Mods/SampleCommon/CoreScripts/WidgetCoreUserMods.lua" />
    </ScriptFileRefs>
</UIAddon>
```

## Концепция TWidget

`TWidget` - специальная таблица, представляющая виджет.
- Ведет себя как нативный виджет в подавляющем большинстве случаев.
- Все именованные дети виджета доступны по ключам вида `"wt" .. CHILD_NAME`.
- Если у виджета более одного ребенка с одинаковым именем, доступен будет последний добавленный.
- Все `TWidget` существуют в единственном экземпляре. Из равенства двух `TWidget` по ссылке следует равенство хранимых `RawWidget` по значению (и наоборот).
- Внутри таблицы `TWidget` можно хранить произвольные данные по произвольным ключам.
- **Не рекомендуется** использовать ключи, начинающиеся с `"wt"`, они зарезервированы за детьми виджета. При конфликте с имеющимися детьми поведение не определено.
- В случае переопределения нативного метода, оригинальный нативный метод можно вызвать через получение сырого виджета: `wtWidget:GetRaw():MethodName( ... )`.

## Глобальные функции

- `IsTWidget( any )` - проверяет, что аргумент является `TWidget`.
- `TWidget( widget )` - возвращает `TWidget` по `RawWidget`. Если виджет не был зарегистрирован в `WidgetCore`, регистрирует и возвращает его. В качестве аргумента допустимы как `RawWidget`, так и `TWidget` (в таком случае функция вернет аргумент без изменений).
- `GetTWidget( widget )` - возвращает `TWidget` для `RawWidget`. Если виджет не зарегистрирован в `WidgetCore`, вернет `nil`.
- `GetTWidgetById( instanceId )` - возвращает `TWidget` по `instanceId`. Если виджет с таким id не зарегистрирован, вернет `nil`.
- `RegisterWidgetcoreExternalLib( libTable )` - регистрирует стороннюю библиотеку в `WidgetCore`, добавляет все методы из библиотеки во все `TWidget`.

```lua
-- Проверка типа объекта
if IsTWidget( someWidget ) then
    LogInfo( "Объект является TWidget" )
end

-- Получение или регистрация TWidget
local wt = TWidget( rawWidget )

-- Получение TWidget без регистрации (вернет nil, если не зарегистрирован)
local existingWt = GetTWidget( rawWidget )

-- Поиск по instanceId
local wtById = GetTWidgetById( 12345 )
```

## Методы TWidget

### Модифицированные нативные методы

- `IsEqual( other )` - `other` может иметь произвольный тип. Эквивалентным считается тот же виджет (как `RawWidget`, так и `TWidget`). Если скрипт не работает с Raw виджетами, оптимальнее использовать простое сравнение через оператор `==`.
- `CreateChildByDesc( desc, [skipReposition = false], [newName] )` - возвращает `TWidget`, опционально переименовывает новый виджет. Если `newName == false`, предупреждение о неуникальности имени подавляется.
- `AddChild( tWidgetChild, [skipReposition = false], [newName] )` - принимает в качестве аргумента `TWidget`, опционально переименовывает дочерний виджет.
- `GetParent()` - возвращает `TWidget` родителя. Не найдет родителя, если он не зарегистрирован в `WidgetCore`.
- `GetChildChecked( widgetName )` - получить ребенка по имени (строгий поиск). Возвращает `TWidget`. Рекурсивный поиск не поддерживается. Вызывает ошибку, если ребенок не найден.
- `GetChildUnchecked( widgetName )` - получить ребенка по имени. Возвращает `TWidget` или `nil`.
- `GetNamedChildren()` - получить всех именованных детей. Возвращает массив `TWidget`.
- `DestroyWidget()` - уничтожить виджет и удалить его из дерева `WidgetCore`.

### Дополнительные методы

- `GetRaw()` - возвращает `RawWidget`. Получение `RawWidget` необходимо при передаче виджета в качестве аргумента в нативные API (например, `WidgetControl3d:AddWidget3D`, `WidgetScrollableContainer:PushBack`).
- `SetParent( tWidgetParent, [skipReposition = false], [newName] )` - эквивалент `tWidgetParent:AddChild( self, skipReposition, newName )`.
- `GetFullName()` - возвращает полное имя виджета, включающее в себя имена всех родителей (формат: `FormName.ParentNName...Parent01Name.WidgetName`).
- `SetRealRect( newRect, forceAlign, autoRealign )` - задает положение виджета в реальных координатах. Может привести к некорректному отображению при выходе за границы родителя. Дополнительные флаги несовместимы между собой. `forceAlign` - задать align принудительно, `autoRealign` - подобрать "наиболее естественный" align.
- `SetName( name )` - задать имя виджета. **НЕ РЕКОМЕНДУЕТСЯ** к использованию.

```lua
-- Создание дочернего виджета по описанию
local desc = { type = "Widget_ButtonSafe", name = "MyButton" }
local wtButton = mainForm:CreateChildByDesc( desc )

-- Доступ к ребенку по имени (префикс "wt" добавляется автоматически)
local foundButton = mainForm.wtMyButton

-- Получение сырого виджета для нативного API
local rawButton = wtButton:GetRaw()
-- WidgetControl3d:AddWidget3D( rawButton ) -- пример использования

-- Изменение положения в реальных координатах
local newRect = { x1 = 100, y1 = 100, x2 = 200, y2 = 150 }
wtButton:SetRealRect( newRect )

-- Получение полного пути
local fullName = wtButton:GetFullName()
LogInfo( "Полное имя: ", fullName )
```

## Отладочный API

Отладочные глобальные функции и методы доступны только при запуске с исходного кода.

### Глобальные функции

- `IsWidgetcoreWidget( any )` - проверяет, является ли аргумент `TWidget`, включает в себя глубокую проверку консистентности.
- `LogWidgetTreeCounters( [root = mainForm] )` - логирует статистику по дереву виджетов (количество, типы, видимость).
- `LogWidgetTree( [root = mainForm] )` - логирует полное дерево виджетов и статистику по нему.

### Методы TWidget

- `GetFullPath()` - возвращает путь виджета в формате `mainForm.wtParentNName.wtParent01Name.wtWidgetName`. Формат пути соответствует таковому в нативном методе `GetDebugInfo`.

```lua
-- Глубокая проверка консистентности виджета
if IsWidgetcoreWidget( myWidget ) then
    LogInfo( "Виджет полностью консистентен" )
end

-- Вывод пути виджета в лог
LogInfo( "Путь в скрипте: ", myWidget:GetFullPath() )

-- Логирование статистики по всему дереву от mainForm
LogWidgetTreeCounters()

-- Логирование полного дерева виджетов
LogWidgetTree()

-- Логирование дерева от конкретного корня
LogWidgetTree( someFormWidget )
```