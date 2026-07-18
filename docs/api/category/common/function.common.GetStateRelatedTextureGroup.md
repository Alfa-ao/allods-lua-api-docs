# common.GetStateRelatedTextureGroup
Возвращает группу связанных с состоянием текстурных ресурсов.

## Описание
```lua
common.GetStateRelatedTextureGroup( sysGroup: string, optional: ?boolean ): RelatedTexturesLua | nil
```
Функция извлекает и возвращает группу связанных с состоянием текстурных ресурсов. Возвращаемая структура представляет собой объект типа userdata (`RelatedTexturesLua`). Если указанная группа не найдена, функция возвращает `nil`.

## Список параметров
- **`sysGroup`** (`string`)
Идентификатор запрашиваемой группы текстурных ресурсов.
- **`optional`** (`boolean` | `nil`)
Флаг, определяющий поведение при отсутствии искомой группы. Если передано значение `true`, отсутствие группы не считается ошибкой. По умолчанию принимает значение `false`.

## Возвращаемые значения
Возвращает `RelatedTexturesLua` — группу связанных с состоянием текстурных ресурсов, или `nil`, если группа не найдена.

## Примеры
### Получение группы текстур с проверкой на существование
```lua
local textureGroup = common.GetStateRelatedTextureGroup( "UI_STATE_DISABLED", true )
if textureGroup then
    -- Использование полученной группы текстур
end
```

## Смотрите также
- [common.GetAddonRelatedTextureGroup](common.GetAddonRelatedTextureGroup)
- [RelatedTexturesLua](RelatedTexturesLua)