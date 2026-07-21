# guild.GetTexture
Возвращает текстуру гильдии.

## Описание
```lua
guild.GetTexture(): TextureId | nil
```
Функция возвращает идентификатор текстуры гильдии, если она имеется, или `nil` в противном случае.

## Список параметров
Параметры отсутствуют.

## Возвращаемые значения
Возвращает `TextureId` | `nil` - текстура гильдии, если она установлена.

## Примеры
### Получение и применение текстуры гильдии
```lua
local texture = guild.GetTexture()
if texture then
    wtGuildTexturePanel:SetBackgroundTexture( texture )
end
```