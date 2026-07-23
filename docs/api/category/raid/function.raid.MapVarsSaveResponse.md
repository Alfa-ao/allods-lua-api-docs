# raid.MapVarsSaveResponse

Отправляет серверу ответ на событие `EVENT_RAID_ENTER_VARS_MAP_WARNING`.

## Описание

```lua
raid.MapVarsSaveResponse( value: boolean )
```

Функция отправляет серверу ответ на событие `EVENT_RAID_ENTER_VARS_MAP_WARNING`, указывая на согласие или отказ от принятия прогресса инстанса.

## Список параметров

- **`value`** (`boolean`) - Флаг согласия. Принимает значение `true`, если игрок согласен принять прогресс инстанса.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Согласие на принятие прогресса

```lua
raid.MapVarsSaveResponse( true )
```

## Смотрите также

- [EVENT_RAID_ENTER_VARS_MAP_WARNING](events.raid#event-raid-enter-vars-map-warning)