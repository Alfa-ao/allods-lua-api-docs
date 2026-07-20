# DiscreteSliderSafe:SetPos

Задает текущую позицию для дискретного слайдера.

## Описание

```lua
DiscreteSliderSafe:SetPos( pos: number )
```

Функция задает текущую позицию для дискретного слайдера.

## Список параметров

- **`pos`** (`number`) - Новая позиция, от `0` до `GetStepsCount()`.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка слайдера в максимальную позицию

```lua
wtDiscreteSlider:SetPos( wtDiscreteSlider:GetStepsCount() )
```

## Смотрите также

- [DiscreteSliderSafe:GetStepsCount](dgfhdfh)