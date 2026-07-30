## EVENT_MEDALS_CHANGED

### Описание

```
EVENT_MEDALS_CHANGED
```

Событие присылается об изменении списка активных достижений.

### Список параметров

Параметры отсутствуют.

## Смотрите также

- [medalsLib.GetMedals](/api/category/medalsLib/function.medalsLib.GetMedals.md)

---

## EVENT_MEDALS_SEARCH_RESULTS

### Описание

```
EVENT_MEDALS_SEARCH_RESULTS
```

Событие приходит в ответ на запрос medalsLib.SearchMedals(). В ответе перечислены идентификаторы ресурсов рангов найденных достижений.

### Список параметров

- **`table`** (`table`) - таблица идентификаторов предметов, индексация начинается с 1.

## Смотрите также

- [medalsLib.SearchMedals](/api/category/medalsLib/function.medalsLib.SearchMedals.md)