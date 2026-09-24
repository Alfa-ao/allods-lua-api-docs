---
description: Извлекает группу звуковых ресурсов, связанных с аддоном.
---

# common.GetAddonRelatedSoundGroup

Извлекает группу звуковых ресурсов, связанных с аддоном.

## Описание

```lua
common.GetAddonRelatedSoundGroup( sysGroup: string, optional: boolean | nil ): RelatedSoundsLua | nil
```

Функция возвращает объект группы звуковых ресурсов (`RelatedSoundsLua`), связанных с аддоном. Если искомая группа не найдена и параметр `optional` не установлен в `true`, либо если клиент запущен в режиме без звука, функция возвращает `nil`.

::: warning Замечание
В режиме без звука функция всегда возвращает `nil`.
:::

## Список параметров

- **`sysGroup`** `(string)` - Идентификатор запрашиваемой звуковой группы.

- **`optional`** `(boolean` | `nil)` - Флаг, определяющий поведение при отсутствии искомой группы. Если передано `true`, отсутствие группы не считается ошибкой. По умолчанию принимает значение `false`.

## Возвращаемые значения

Возвращает `RelatedSoundsLua` - группу звуковых ресурсов, или `nil`, если группа не найдена или клиент работает в режиме без звука.

## Примеры

```xml
<Item href="/Mods/SampleCommon/CoreScripts/AddonBase.lua" />
```

### Default example doc

```lua:line-numbers=794
--------------------------------------------------------------------------------
-- Sound caches
--------------------------------------------------------------------------------
if common.IsSoundEnabled() then
	--------------------------------------------------------------------------------
	local _soundDefaultGroupId = "Common"
	local _dummyGroup = { HasSound = function() return false end }
	local _soundAddonGroups = {}
	local _soundAddonCache = {}
	local _soundStateGroups = {}
	local _soundStateCache = {}
	--------------------------------------------------------------------------------
	local function GetGroupSound( group, groupCache, sysName, optional )
		local result = groupCache[ sysName ]
		if result == nil then
			local hasSound = group:HasSound( sysName )
			if hasSound then
				local soundId = group:GetSound( sysName )
				local sound = common.CreateSound( soundId )
				if sound then
					result = sound
				else
					result = false
					---BEGIN_DEBUG---
					LogError( string.format( "Failed to create sound with id [%s], if sound muted this isn't an error", sysName ) )
					---END_DEBUG---
				end
			elseif optional then
				result = false
			---BEGIN_DEBUG---
			else
				local _, sysGroup = table.search( _soundAddonGroups, group )
				if not sysGroup then
					_, sysGroup = table.search( _soundStateGroups, group )
				end
				if group == _dummyGroup then
					LogError( string.format( "Requested sound [%s] from non-existent group [%s]", tostring( sysName ), tostring( sysGroup ) ) )
				else
					LogError( string.format( "Requested non-existent sound [%s] from group [%s]", tostring( sysName ), tostring( sysGroup ) ) )
				end
			---END_DEBUG---
			end
			groupCache[ sysName ] = result
		end
		return result
	end
	--------------------------------------------------------------------------------
	-- Получить звук sysName из группы аддона sysGroup (или Common если nil)
	-- Если задано optional то отсутствие звука не считается ошибкой
	function GetAddonSound( sysGroup, sysName, optional )
		sysGroup = sysGroup or _soundDefaultGroupId
		local group = _soundAddonGroups[ sysGroup ]
		if not group then
			group = common.GetAddonRelatedSoundGroup( sysGroup, true ) or _dummyGroup
			_soundAddonGroups[ sysGroup ] = group
			_soundAddonCache[ sysGroup ] = {}
		end
		return GetGroupSound( group, _soundAddonCache[ sysGroup ], sysName, optional )
	end
	--------------------------------------------------------------------------------
	-- Получить звук sysName из группы стейта sysGroup (или Common если nil)
	-- Если задано optional то отсутствие звука не считается ошибкой
	function GetStateSound( sysGroup, sysName, optional )
		sysGroup = sysGroup or _soundDefaultGroupId
		local group = _soundStateGroups[ sysGroup ]
		if not group then
			group = common.GetStateRelatedSoundGroup( sysGroup, true ) or _dummyGroup
			_soundStateGroups[ sysGroup ] = group
			_soundStateCache[ sysGroup ] = {}
		end
		return GetGroupSound( group, _soundStateCache[ sysGroup ], sysName, optional )
	end
	--------------------------------------------------------------------------------
else
	function GetAddonSound() return nil end
	function GetStateSound() return nil end
end
--------------------------------------------------------------------------------
```

## Смотрите также

- [RelatedSoundsLua](/api/types/LuaApi.md)
- [common.GetStateRelatedSoundGroup](function.common.GetStateRelatedSoundGroup.md)