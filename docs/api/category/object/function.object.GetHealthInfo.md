# object.GetHealthInfo

Возвращает информацию о здоровье интерактивного объекта.

## Описание

```lua
object.GetHealthInfo( objectId: ObjectId ): table | nil
```

Некоторые поля оказываются недоступными при отсутствии их значений для конкретного типа объектов, например, точное значение здоровья или поглощения у противника узнать невозможно.

## Список параметров

- **`objectId`** (`ObjectId`) - Идентификатор объекта.

## Возвращаемые значения

Возвращает `table` | `nil` - Таблица с информацией о здоровье объекта или `nil`, если данные недоступны.

- **`value`** (`number` | `nil`) - Текущее значение здоровья объекта.

- **`limit`** (`number` | `nil`) - Предельное значение здоровья объекта.

- **`valuePercents`** (`number` | `nil`) - Процент текущего здоровья от предельного.

- **`additionalValue`** (`number` | `nil`) - Текущее значение дополнительного здоровья (поглощение).

- **`additionalPercents`** (`number` | `nil`) - Процент текущего дополнительного здоровья (поглощение) от предельного.

- **`isInvulnerable`** (`boolean`) - Принимает значение `true`, если объект неуязвим.

## Примеры

### Безопасное получение и расчет показателей здоровья

```lua
local healthInfo = objectId and object.GetHealthInfo( objectId )
if healthInfo then
    local ratio = healthInfo.limit ~= 0 and healthInfo.value / healthInfo.limit or 1
    local state = healthInfo.valuePercents / 100 or 0
end
```

::: info Описание примера
В примере выполняется безопасное получение информации о здоровье с предварительной проверкой идентификатора. Далее рассчитывается соотношение текущего и предельного здоровья, а также переводится в долю процентное значение здоровья.
:::

## Смотрите также
- [EVENT_OBJECT_HEALTH_CHANGED](events#event-object-health-changed)
- [object.GetManaInfo](function.object.GetManaInfo)