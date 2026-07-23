# raid.MapSaveResponse
Отправляет ответ на запрос о сохранении карты рейдового инстанса.

## Описание
```lua
raid.MapSaveResponse( response: boolean )
```
Функция отправляет ответ на запрос о сохранении карты рейдового инстанса, инициированный событием `EVENT_RAID_SAVE_MAP_QUESTION`.

## Список параметров
- **`response`** (`boolean`) - Флаг согласия на сохранение. Принимает значение `true`, если игрок согласен на сохранение.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Согласие на сохранение карты
```lua
raid.MapSaveResponse( true )
```

## Смотрите также
- [EVENT_RAID_SAVE_MAP_QUESTION](events.raid#event-raid-save-map-question)