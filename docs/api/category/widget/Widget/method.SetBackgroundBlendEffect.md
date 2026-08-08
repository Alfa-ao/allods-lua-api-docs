# WidgetSafe:SetBackgroundBlendEffect

Задает способ наложения для фонового слоя контрола.

## Описание

```lua
WidgetSafe:SetBackgroundBlendEffect( blendEffect: number )
```

Сам фоновый слой должен быть в наличии. Описание способа наложения смотреть: BlendEffect.

## Список параметров

- **`blendEffect`** (`number`(`BLEND_EFFECT_*`)) - Способ наложения.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Базовый вызов

```lua
wtElement:SetBackgroundBlendEffect( BLEND_EFFECT_ADD )
```

## Смотрите также

- [BLEND_EFFECT_*](/api/constants/constants.BLEND_EFFECT_.md)