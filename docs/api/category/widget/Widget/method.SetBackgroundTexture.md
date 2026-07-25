# WidgetSafe:SetBackgroundTexture

Меняет текстуру для фонового слоя.

## Описание

```lua
WidgetSafe:SetBackgroundTexture( texture: TextureId )
```

Функция изменяет текстуру для фонового слоя. Слой должен быть типа `WidgetLayerSimpleTexture`.

## Список параметров

- **`texture`** (`TextureId`) - Идентификатор текстуры.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Изменение текстуры фонового слоя

```lua
wtActionIcon:SetBackgroundTexture( placeholderIconId )
```