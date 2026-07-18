# common.GetAddonRelatedTextureGroup
Возвращает группу связанных с аддоном текстурных ресурсов.

## Описание
```lua
common.GetAddonRelatedTextureGroup( sysGroup: string, optional: ?boolean ): RelatedTexturesLua | nil
```
Функция извлекает и возвращает группу связанных с аддоном текстурных ресурсов. Возвращаемая группа представляет собой объект типа userdata (`RelatedTexturesLua`). Если указанная группа не найдена, функция возвращает `nil`.

## Список параметров
- **`sysGroup`** (`string`)
Идентификатор (имя) искомой группы текстурных ресурсов.
- **`optional`** (`boolean` | `nil`)
Флаг, определяющий поведение при отсутствии искомой группы. Если передано `true`, отсутствие группы не считается ошибкой и не вызывает предупреждений в логах (по умолчанию `false`).

## Возвращаемые значения
Возвращает `RelatedTexturesLua` — объект группы текстурных ресурсов, связанный с аддоном, или `nil`, если группа не найдена.

## Примеры
### Инициализация и получение текстур с использованием кэширования
```lua
--------------------------------------------------------------------------------
-- Texture caches
--------------------------------------------------------------------------------
do
	--------------------------------------------------------------------------------
	local _textureDefaultGroupId = "Common"
	local _dummyGroup = { HasTexture = function() return false end }
	local _textureAddonGroups = {}
	local _textureAddonCache = {}
	local _textureStateGroups = {}
	local _textureStateCache = {}
	--------------------------------------------------------------------------------
	local function GetGroupTexture( group, groupCache, sysName, optional )
		local result = groupCache[ sysName ]
		if result == nil then
			local hasText = group:HasTexture( sysName )
			if hasText then
				result = group:GetTexture( sysName )
			elseif optional then
				result = false
			---BEGIN_DEBUG---
			else
				local _, sysGroup = table.search( _textureAddonGroups, group )
				if not sysGroup then
					_, sysGroup = table.search( _textureStateGroups, group )
				end
				if group == _dummyGroup then
					LogError( string.format( "Requested texture [%s] from non-existent group [%s]", tostring( sysName ), tostring( sysGroup ) ) )
				else
					LogError( string.format( "Requested non-existent texture [%s] from group [%s]", tostring( sysName ), tostring( sysGroup ) ) )
				end
			---END_DEBUG---
			end
			groupCache[ sysName ] = result
		end
		return result
	end
	--------------------------------------------------------------------------------
	-- Получить текстуру sysName из группы аддона sysGroup (или Common если nil)
	-- Если задано optional то отсутствие текстуры не считается ошибкой (группа должна существовать)
	function GetAddonTexture( sysGroup, sysName, optional )
		sysGroup = sysGroup or _textureDefaultGroupId
		local group = _textureAddonGroups[ sysGroup ]
		if not group then
			group = common.GetAddonRelatedTextureGroup( sysGroup, true ) or _dummyGroup
			_textureAddonGroups[ sysGroup ] = group
			_textureAddonCache[ sysGroup ] = {}
		end
		return GetGroupTexture( group, _textureAddonCache[ sysGroup ], sysName, optional )
	end
	--------------------------------------------------------------------------------
	-- Получить текстуру sysName из группы стейта sysGroup (или Common если nil)
	-- Если задано optional то отсутствие текстуры не считается ошибкой (группа должна существовать)
	function GetStateTexture( sysGroup, sysName, optional )
		sysGroup = sysGroup or _textureDefaultGroupId
		local group = _textureStateGroups[ sysGroup ]
		if not group then
			group = common.GetStateRelatedTextureGroup( sysGroup, true ) or _dummyGroup
			_textureStateGroups[ sysGroup ] = group
			_textureStateCache[ sysGroup ] = {}
		end
		return GetGroupTexture( group, _textureStateCache[ sysGroup ], sysName, optional )
	end
	--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
```
::: info Описание примера
В примере реализуется система кэширования текстурных ресурсов. Функция `GetAddonTexture` использует `common.GetAddonRelatedTextureGroup` для получения группы текстур аддона. Если группа ранее не запрашивалась, она извлекается и сохраняется в локальном кэше `_textureAddonGroups`. Далее с помощью вспомогательной функции `GetGroupTexture` происходит проверка наличия конкретной текстуры через метод `HasTexture` и её извлечение через `GetTexture`. При отсутствии текстуры и установленном флаге `optional` ошибка не логируется, что позволяет безопасно запрашивать опциональные ресурсы.
:::

## Смотрите также
- [RelatedTexturesLua](../classes/RelatedTexturesLua)