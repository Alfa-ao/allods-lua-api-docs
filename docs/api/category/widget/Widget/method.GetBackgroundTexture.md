# WidgetSafe:GetBackgroundTexture

Возвращает текстуру фонового слоя.

## Описание

```lua
WidgetSafe:GetBackgroundTexture(): TextureId | nil
```

В случае отсутствия текстуры, слоя и для анимированных слоев возвращается `nil`. Метод доступен у всех типов виджетов.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `TextureId` | `nil` - текстура фонового слоя (при наличии).

## Примеры

### Получение текстуры фонового слоя

```lua
local backLayerTexture = widget:HasBackground() and widget:GetBackgroundTexture()
LogInfo( "Back layer texture info:", backLayerTexture and common.GetTextureInfo( backLayerTexture ) or "No texture" )
```

::: info Описание примера
Проверяется наличие фонового слоя с помощью `widget:HasBackground()`. Если слой существует, извлекается его текстура. Далее выводится информация о текстуре в лог, либо сообщение об ее отсутствии.
:::

## Смотрите также

- [WidgetSafe:HasBackground](method.HasBackground)
- [common.GetTextureInfo](../../common/function.common.GetTextureInfo)