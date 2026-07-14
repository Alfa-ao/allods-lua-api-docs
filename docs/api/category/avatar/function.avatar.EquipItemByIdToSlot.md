# avatar.EquipItemByIdToSlot
Экипирует предмет с указанным идентификатором в заданный слот экипировки.

## Описание
```lua
avatar.EquipItemByIdToSlot( itemId: ObjectId, equipSlot: number )
```

Экипирует предмет с указанным идентификатором в заданный слот экипировки. Предмет должен находиться в одном из контейнеров (например, `ITEM_CONT_...`). Получить предметы в контейнере можно с помощью функции `containerLib.GetItems`. Особое внимание следует уделить работе с контейнерами `ITEM_CONT_CHECKROOM` и `ITEM_CONT_POWEREDLSWEAPON`. Возвращаемое значение отсутствует.

## Список параметров
- **`itemId`** (`ObjectId`)
Идентификатор предмета.

- **`equipSlot`** (`number`)
Индекс слота в экипировке (перечисление `DRESS_SLOT_...`).

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Экипировка предмета в слот для левой руки
```lua
avatar.EquipItemByIdToSlot( itemId, DRESS_SLOT_OFFHAND )
```

## Смотрите также
- `DRESS_SLOT_...`
- `containerLib.GetItems`
- `ITEM_CONT_CHECKROOM`
- `ITEM_CONT_POWEREDLSWEAPON`