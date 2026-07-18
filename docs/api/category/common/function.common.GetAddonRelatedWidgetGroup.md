# common.GetAddonRelatedWidgetGroup
Возвращает группу связанных с аддоном шаблонов виджетов.

## Описание
```lua
common.GetAddonRelatedWidgetGroup( sysGroup: string, optional: boolean|nil ): RelatedWidgetsLua|nil
```
Функция извлекает и возвращает группу шаблонов виджетов, связанных с аддоном, по заданному идентификатору. Возвращаемая группа представляет собой объект типа `RelatedWidgetsLua`. Если искомая группа отсутствует, а параметр `optional` не установлен в `true`, функция возвращает `nil`.

## Список параметров
- **`sysGroup`** (`string`)
Идентификатор искомой группы шаблонов виджетов.
- **`optional`** (`boolean` | `nil`)
Флаг, определяющий поведение при отсутствии группы. Если передано значение `true`, отсутствие искомой группы не считается ошибкой. По умолчанию `false`.

## Возвращаемые значения
Возвращает `RelatedWidgetsLua` — группу шаблонов виджетов, или `nil`, если группа не найдена.

## Примеры
### Получение и использование группы шаблонов виджетов
```lua
local GetWidgetDesc
--------------------------------------------------------------------------------
do
	local stateGroups = {}
	local addonGroups = {}
	--------------------------------------------------------------------------------
	function GetWidgetDesc( name, templateData )
		---BEGIN_DEBUG---
		assert( type( name ) == "string", "advWidgetFactory::GetWidgetDesc: Wrong template name: string expected, got %s", type( name ) )
		assert( widgetPools[ name ] == nil, 'advWidgetFactory::GetWidgetDesc: Wrong template name: Name [%s] not unique', name )
		assert( templateData == nil or type( templateData ) == "table", "advWidgetFactory::GetWidgetDesc: Wrong template: table or nil expected, got %s", type( templateData ) )
		---END_DEBUG---

		if templateData then
			templateData.type = templateData.type or WIDGET_TEMPLATE_TYPE_ADDON

			---BEGIN_DEBUG---
			assert( templateData.type == WIDGET_TEMPLATE_TYPE_ADDON or templateData.type == WIDGET_TEMPLATE_TYPE_STATE,
				"advWidgetFactory::GetWidgetDesc: Wrong template group type" )
			assert( type( templateData.group ) == "string",
				"advWidgetFactory::GetWidgetDesc: Wrong template group name: string expected, got %s", type( templateData.group ) )
			assert( type( templateData.name ) == "string",
				"advWidgetFactory::GetWidgetDesc: Wrong template group member name: string expected, got %s", type( templateData.name ) )
			---END_DEBUG---

			local group
			if templateData.type == WIDGET_TEMPLATE_TYPE_ADDON then
				group = addonGroups[ templateData.group ] or common.GetAddonRelatedWidgetGroup( templateData.group, true )
				addonGroups[ templateData.group ] = group
			elseif templateData.type == WIDGET_TEMPLATE_TYPE_STATE then
				group = stateGroups[ templateData.group ] or common.GetStateRelatedWidgetGroup( templateData.group, true )
				stateGroups[ templateData.group ] = group
			end

			---BEGIN_DEBUG---
			assert( group ~= nil, "advWidgetFactory::GetWidgetDesc: Can't find group [%s]", templateData.group )
			assert( group:HasWidget( templateData.name ),
				"advWidgetFactory::GetWidgetDesc: Can't find widget [%s] in group [%s]", templateData.name, templateData.group )
			---END_DEBUG---

			return group:GetWidget( templateData.name )
		else
			---BEGIN_DEBUG---
			assert( mainForm:GetChildUnchecked( name ) ~= nil, "advWidgetFactory::GetWidgetDesc: Can't find widget [%s] in mainForm", name )
			---END_DEBUG---
			local widget = mainForm:GetChildChecked( name )
			local desc = widget:GetWidgetDesc()
			widget:DestroyWidget()
			return desc
		end
	end
	--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
```
::: info Описание примера
В примере реализуется функция `GetWidgetDesc`, предназначенная для получения описания виджета. В процессе работы вызываются функции `common.GetAddonRelatedWidgetGroup` и `common.GetStateRelatedWidgetGroup` для извлечения групп шаблонов. Далее используются методы `HasWidget` и `GetWidget` для проверки наличия и получения конкретного виджета из группы, а также методы `GetChildUnchecked`, `GetChildChecked`, `GetWidgetDesc` и `DestroyWidget` для работы с основной формой.
:::

## Смотрите также
- [RelatedTexturesLua](RelatedTexturesLua)