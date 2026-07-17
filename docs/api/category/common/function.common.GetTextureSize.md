# common.GetTextureSize
Возвращает реальные размеры текстуры из ресурса.

## Описание
```lua
common.GetTextureSize( textureId: TextureId ): table | nil
```
Функция извлекает из ресурса и возвращает реальные размеры указанной текстуры в виде таблицы с полями ширины и высоты. Если текстура с заданным идентификатором не найдена или не загружена, возвращается `nil`.

## Список параметров
- **`textureId`** (`TextureId`)
Идентификатор ресурса текстуры, размеры которой необходимо получить.

## Возвращаемые значения
Возвращает `table` или `nil`:
- **`sizeX`** (`number`)
Реальная ширина текстуры.
- **`sizeY`** (`number`)
Реальная высота текстуры.

## Примеры
### Получение размеров текстуры заклинания
```lua
local spellInfo = avatar.GetSpellInfo( spellId )
local textureId = spellInfo and spellInfo.texture
local size = textureId and common.GetTextureSize( textureId )
if size then
    LogInfo( size )
end
```
::: info Описание примера
В примере сначала запрашивается информация о заклинании с помощью `avatar.GetSpellInfo`. Если данные успешно получены, извлекается идентификатор текстуры, который затем передается в `common.GetTextureSize` для получения её реальных размеров.
:::

## Смотрите также
- [avatar.GetSpellInfo](avatar.GetSpellInfo)