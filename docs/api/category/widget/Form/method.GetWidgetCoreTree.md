widget:GetWidgetCoreTree
# WidgetSafe:GetWidgetCoreTree
Возвращает дерево виджетов в формате TWidget начиная с self.

## Описание
```lua
WidgetSafe:GetWidgetCoreTree( indexFunction: function, TWidgetByInstanceId: table ): table
```
Функция возвращает дерево виджетов в формате TWidget начиная с self. В TWidgetByInstanceId должна быть передана пустая таблица, которая будет заполнена как hash_map< instanceId, TWidget >, или валидный hash_map< instanceId, TWidget >, который будет обновлен. При повторном обходе поддеревьев известных виджетов повторное выполнение не производится.

::: warning Замечание
Функция создана для оптимизации widgetcore и едва ли применима где-либо еще.
:::

## Список параметров

- **`indexFunction`** (`function`) - Функция `__index` для метатаблиц виджетов (смотри скриптовый класс widgetcore).

- **`TWidgetByInstanceId`** (`table`) - Хэш-таблица `hash_map< instanceId, TWidget >`, передается по ссылке и изменяется в процессе выполнения.

## Возвращаемые значения

Возвращает `table` - дерево виджетов в формате TWidget.

::: info Структура tWidget
{
    wtChildName01 = TWidget01,
    wtChildName02 = TWidget02,
    ...
    wtChildNameN = TWidgetN
} with META: {
    __index = indexFunction
    widget - WidgetSafe (userdata) - реальный виджет
    id - instanceId(light userdata) - ид виджета
}
:::

Все данные по ссылкам, таблицы нигде не копируются, одному виджету соответствует ровно одна таблица в дереве и ровно одна ссылка на нее в `TWidgetByInstanceId`.

## Примеры
### Инициализация и использование widgetcore
```lua
--------------------------------------------------------------------------------
local WIDGET_NAME_PREFIX = "wt" -- Не менять!
--------------------------------------------------------------------------------
local tWidgetByInstanceId = {}
local _widgetcore = {}
local _cppwrap = function()
	---BEGIN_DEBUG---
	error( "widgetcore::__cppwrap: FATAL: Init failed, mainForm not exist" )
	---END_DEBUG---
end
--------------------------------------------------------------------------------
-- Internal
local function _index( obj, key )
	local widget = getmetatable( obj ).widget
	if key == "widget" then
		return widget
	end

	local method = _widgetcore[ key ]

	if not method and type( widget[ key ] ) == "function" then
		method = function( self, ... )
			local widget = self:GetRaw()
			return widget[ key ]( widget, ... )
		end

		_widgetcore[ key ] = method
	end

	return method
end
--------------------------------------------------------------------------------
-- Internal
local function wrap( widget )
	---BEGIN_DEBUG---
	assert( IsTWidget( widget ) or common.IsWidget( widget ), "widgetcore::wrap FATAL: Widget expected, got %s", apitype( widget ) )
	assert( widget:GetAddonName() == ADDON_NAME, "widgetcore::wrap FATAL: Foreign widget wrapping is prohibited" )
	---END_DEBUG---
	return tWidgetByInstanceId[ widget:GetInstanceId() ] or _cppwrap( widget, _index, tWidgetByInstanceId )
end
--------------------------------------------------------------------------------
-- Превратить обычный виджет в TWidget
function TWidget( widget )
	return wrap( widget )
end
--------------------------------------------------------------------------------
-- Получить TWidget по обычному виджету
function GetTWidget( widget )
	return tWidgetByInstanceId[ widget:GetInstanceId() ]
end
--------------------------------------------------------------------------------
-- Получить TWidget по instanceId
function GetTWidgetById( instanceId )
	return instanceId and tWidgetByInstanceId[ instanceId ]
end
--------------------------------------------------------------------------------
-- Проверить что аргумент это TWidget
function IsTWidget( widget )
	local id = widget and type( widget ) == "table" and widget.GetInstanceId and widget:GetInstanceId() or false
	return id and tWidgetByInstanceId[ id ] ~= nil
end
--------------------------------------------------------------------------------
if rawget( _G, "mainForm" ) then
	_cppwrap = mainForm.GetWidgetCoreTree
	mainForm = _cppwrap( mainForm, _index, tWidgetByInstanceId )
end
--------------------------------------------------------------------------------
```