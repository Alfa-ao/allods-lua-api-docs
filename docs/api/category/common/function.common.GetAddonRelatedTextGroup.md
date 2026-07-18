# common.GetAddonRelatedTextGroup
Возвращает группу связанных с аддоном текстовых ресурсов.

## Описание
```lua
common.GetAddonRelatedTextGroup( sysGroup: string, optional: boolean|nil ): RelatedTextsLua|nil
```
Функция извлекает и возвращает группу связанных с аддоном текстовых ресурсов, представленную в виде пользовательских данных (`RelatedTextsLua`). Если запрашиваемая группа не найдена, функция возвращает `nil`, за исключением случаев, когда параметр `optional` установлен в `true`.

## Список параметров
- **`sysGroup`** (`string`)
Идентификатор искомой группы текстовых ресурсов.
- **`optional`** (`boolean` | `nil`)
Флаг, определяющий поведение при отсутствии группы. Если передано `true`, отсутствие искомой группы не считается ошибкой. По умолчанию принимает значение `false`.

## Возвращаемые значения
Возвращает `RelatedTextsLua` — группу текстовых ресурсов, или `nil`, если группа не найдена.

## Примеры
### Получение группы текстов и извлечение конкретного текста
```lua
local _textAddonGroups = {}

function GetAddonText( sysGroup, sysName, optional )
    sysGroup = sysGroup or "Common"
    local group = _textAddonGroups[ sysGroup ]

    if not group then
        -- Запрашиваем группу текстов, связанную с аддоном
        group = common.GetAddonRelatedTextGroup( sysGroup, true )
        _textAddonGroups[ sysGroup ] = group
    end

    if group and group:HasText( sysName ) then
        return group:GetText( sysName )
    end

    return nil
end
```
::: info Описание примера
В примере реализуется функция-обертка `GetAddonText`. Сначала проверяется наличие кэшированной группы текстов. Если группа отсутствует, вызывается `common.GetAddonRelatedTextGroup` с параметром `true`, что предотвращает ошибки при отсутствии ресурса. Полученная группа кэшируется, после чего из нее извлекается нужный текст с помощью методов `HasText` и `GetText`.
:::

### Default example doc
```lua
--------------------------------------------------------------------------------
-- Text caches
--------------------------------------------------------------------------------
do
	--------------------------------------------------------------------------------
	local _textDefaultGroupId = "Common"
	local _dummyGroup = { HasText = function() return false end }
	local _textAddonGroups = {}
	local _textAddonCache = {}
	local _textStateGroups = {}
	local _textStateCache = {}
	--------------------------------------------------------------------------------
	local function GetGroupText( group, groupCache, sysName, optional )
		local result = groupCache[ sysName ]
		if result == nil then
			local hasText = group:HasText( sysName )
			if hasText then
				result = group:GetText( sysName )
			elseif optional then
				result = false
			else
				result = GetEWs()
				---BEGIN_DEBUG---
				local _, sysGroup = table.search( _textAddonGroups, group )
				if not sysGroup then
					_, sysGroup = table.search( _textStateGroups, group )
				end
				if group == _dummyGroup then
					LogError( string.format( "Requested text [%s] from non-existent group [%s]", tostring( sysName ), tostring( sysGroup ) ) )
				else
					LogError( string.format( "Requested non-existent text [%s] from group [%s]", tostring( sysName ), tostring( sysGroup ) ) )
				end
				---END_DEBUG---
			end
			groupCache[ sysName ] = result
		end
		return result
	end
	--------------------------------------------------------------------------------
	-- Получить текст sysName из группы аддона sysGroup (или Common если nil)
	-- Если задано optional то отсутствие текста не считается ошибкой (группа должна существовать)
	function GetAddonText( sysGroup, sysName, optional )
		sysGroup = sysGroup or _textDefaultGroupId
		local group = _textAddonGroups[ sysGroup ]
		if not group then
			group = common.GetAddonRelatedTextGroup( sysGroup, true ) or _dummyGroup
			_textAddonGroups[ sysGroup ] = group
			_textAddonCache[ sysGroup ] = {}
		end
		return GetGroupText( group, _textAddonCache[ sysGroup ], sysName, optional )
	end
	--------------------------------------------------------------------------------
	-- Получить текст sysName из группы стейта sysGroup (или Common если nil)
	-- Если задано optional то отсутствие текста не считается ошибкой (группа должна существовать)
	function GetStateText( sysGroup, sysName, optional )
		sysGroup = sysGroup or _textDefaultGroupId
		local group = _textStateGroups[ sysGroup ]
		if not group then
			group = common.GetStateRelatedTextGroup( sysGroup, true ) or _dummyGroup
			_textStateGroups[ sysGroup ] = group
			_textStateCache[ sysGroup ] = {}
		end
		return GetGroupText( group, _textStateCache[ sysGroup ], sysName, optional )
	end
	--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
```

## Смотрите также
- [RelatedTextsLua](#relatedtextslua)