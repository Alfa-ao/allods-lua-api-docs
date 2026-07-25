# ScrollableContainerSafe:IsSliderMin
Проверяет, находится ли скроллер в самом начале.

## Описание

```lua
ScrollableContainerSafe:IsSliderMin(): boolean
```

Функция возвращает состояние нахождения скроллера в самом начале. Если контейнер не скроллируется, всегда возвращается `true`.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `boolean` - `true`, если скроллер находится в самом начале.

## Примеры

### Проверка положения скроллера
```lua
if wtScrollableContainer:IsSliderMin() then
    -- do something
end
```