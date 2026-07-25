# WidgetSafe:SetForegroundTexture

Меняет текстуру переднего слоя контрола.

## Описание

```lua
WidgetSafe:SetForegroundTexture( texture: TextureId | nil )
```

Слой должен быть `WidgetLayerSimpleTexture`. Допустима пустая текстура (`nil`).

## Список параметров

- **`texture`** (`TextureId` | `nil`) - Идентификатор текстуры.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка текстуры

```lua
wtActionIcon:SetForegroundTexture( placeholderIconId )
```