# WidgetSafe:PlayMoveEffect

Запускает эффект изменения положения виджета.

## Описание

```lua
WidgetSafe:PlayMoveEffect( start: table|nil, finish: table|nil, timeMs: number|nil, algoDesc: number|table|nil, needEvent: boolean|nil, eventReceivers: table|nil )
```

Функция запускает эффект изменения положения виджета. Эффект имеет тип `ET_FADE`.

::: warning Замечание
Если виджет выровнен по ширине (`WIDGET_ALIGN_BOTH`) или имеет неявное масштабирование (`WIDGET_SIZING_CHILDREN` / `WIDGET_SIZING_INTERNAL`), то данный эффект может приводить к изменению размера виджета.
:::

## Список параметров

- **`start`** (`table` | `nil`) - Начальное положение виджета. Тип `table` (WidgetPlacement), значимые поля: `posX`, `posY`, `highPosX`, `highPosY`.

- **`finish`** (`table` | `nil`) - Конечное положение виджета. Тип `table` (WidgetPlacement), значимые поля: `posX`, `posY`, `highPosX`, `highPosY`.

- **`timeMs`** (`number` | `nil`) - Длительность эффекта в миллисекундах. Должно быть строго положительным. В случае `nil` используется значение 1000. Гарантируется, что итоговая длительность эффекта попадет в диапазон (timeMs, timeMs + время кадра).

- **`algoDesc`** (`number` | `table` | `nil`) - Описание алгоритма эффекта. Значения: 
    - `nil` - значение по умолчанию - EA_MONOTONOUS_INCREASE.
    - `int` - значение EA_*.
    - `table` - описание алгоритма EA_* с параметрами, обязательное поле `type` (`number` (`EA_*`)) - набор полей зависит от алгоритма (смотри описание алгоритмов эффектов).

- **`needEvent`** (`boolean` | `nil`) - Нужно ли посылать событие `EVENT_EFFECT_FINISHED` по окончании данного эффекта. По умолчанию `false`.

- **`eventReceivers`** (`table` | `nil`) - Список системных имен аддонов (помимо аддона, запустившего эффект) получателей события `EVENT_EFFECT_FINISHED`. По умолчанию пуст. Поле игнорируется в пользовательских дополнениях. Тип: `table` of `string` (от 1).

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Запуск эффекта перемещения

```lua
wtTestButton:PlayMoveEffect( nil, { posX = 0 }, 2000, EA_MONOTONOUS_INCREASE )
```

## Смотрите также

- [EVENT_EFFECT_FINISHED](/api/events/events.EVENT_EFFECT_.md#event-effect-finished)
- [EA_MONOTONOUS_INCREASE](/api/constants/constants.EA.md)
- [ET_FADE](/api/constants/constants.ET.md)