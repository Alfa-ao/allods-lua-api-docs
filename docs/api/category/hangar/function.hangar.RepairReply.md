# hangar.RepairReply

Отвечает на запрос о ремонте корабля, связанный с событием `EVENT_HANGAR_REPAIR_QUESTION`.

## Описание

```lua
hangar.RepairReply( positive: boolean, ticks: number )
```

Функция ускоряет ремонт корабля на указанное количество тиков, забирая при этом у игрока необходимое количество ресурсов.

## Список параметров

- **`positive`** (`boolean`) - Флаг согласия на ремонт корабля.

- **`ticks`** (`number`) - Количество тиков, на которое необходимо ускорить ремонт.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Согласие на ускорение ремонта

```lua
hangar.RepairReply( true, 1 )
```

## Смотрите также

- [EVENT_HANGAR_REPAIR_QUESTION](events.hangar#event-hangar-repair-question)