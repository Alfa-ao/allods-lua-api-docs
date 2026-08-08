# WidgetSafe:PlayRotationEffect

Запускает эффект поворота текстур виджета.

## Описание

```lua
WidgetSafe:PlayRotationEffect( start: table|nil, finish: table|nil, timeMs: number|nil, algoDesc: number|table|nil, needEvent: boolean|nil, eventReceivers: table|nil )
```

Осуществляет вращение текстур `BackLayer` и `FrontLayer` относительно центра виджета против часовой стрелки. При выходе текстур за пределы вписанной в виджет окружности для предотвращения обрезания виджет должен иметь флаг `clipContent = false`. Эффект имеет тип `ET_TEXTURE_ROTATION`.

## Список параметров

- **`start`** (`number` | `nil`) - Начальный угол поворота виджета в радианах.

- **`finish`** (`number` | `nil`) - Конечный угол поворота виджета в радианах.

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

### Базовый вызов

```lua
wt:PlayRotationEffect( 0, math.pi, 2000 )
```

## Смотрите также

- [EVENT_EFFECT_FINISHED](/api/events/events.EVENT_EFFECT_.md#event-effect-finished)
- [ET_TEXTURE_ROTATION](/api/constants/constants.ET.md)