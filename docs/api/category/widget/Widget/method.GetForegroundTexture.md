# WidgetSafe:GetForegroundTexture
Возвращает текстуру для переднего слоя.

## Описание
```lua
WidgetSafe:GetForegroundTexture(): TextureId | nil
```
Функция возвращает текстуру для переднего слоя, а в случае отсутствия текстуры, слоя и для анимированных слоев возвращает `nil`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `TextureId` | `nil` - текстура переднего слоя (при наличии).

## Примеры

### Получение текстуры переднего слоя

```lua
local frontLayerTexture = widget:HasForeground() and widget:GetForegroundTexture()
LogInfo( "Front layer texture info:", frontLayerTexture and common.GetTextureInfo( frontLayerTexture ) or "No texture" )
```

## Смотрите также
- [WidgetSafe:HasForeground](method.HasForeground)
- [common.GetTextureInfo](../../common/function.common.GetTextureInfo)