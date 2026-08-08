# WidgetSafe:SetForegroundBlendEffect

Задает способ наложения для переднего слоя контрола.

## Описание

```lua
WidgetSafe:SetForegroundBlendEffect( blendEffect: number )
```

Сам передний слой должен быть в наличии. Описание способа наложения смотреть: BlendEffect.

## Список параметров

- **`blendEffect`** (`number`(`BLEND_EFFECT_*`)) - способ наложения.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка способа наложения

```lua
wtElement:SetForegroundBlendEffect( BLEND_EFFECT_ADD )
```

## Смотрите также

- [BLEND_EFFECT_*](/api/constants/constants.BLEND_EFFECT_.md)