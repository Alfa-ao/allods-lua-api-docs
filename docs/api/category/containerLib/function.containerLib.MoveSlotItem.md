# containerLib.MoveSlotItem

Перемещает предмет.

## Описание

```lua
containerLib.MoveSlotItem( slotTypeFrom: number, slotFrom: number, slotTypeTo: number, slotTo: number|nil, count: number|nil )
```

Функция перемещает предмет. Если будет провалена какая-либо из проверок `containerLib.CheckMoveSlotItem`, то функция завершится с ошибкой.

## Список параметров

- **`slotTypeFrom`** (`number`) - тип контейнера места источника.

- **`slotFrom`** (`number`) - номер слота в контейнере источнике.

- **`slotTypeTo`** (`number`) - тип контейнера места назначения.

- **`slotTo`** (`number` | `nil`) - номер слота в контейнере назначения. Если указан `nil`, то слот подберётся автоматически.

- **`count`** (`number` | `nil`) - количество перемещаемых предметов. Если указан `nil`, то переместится весь слот.

::: details Допустимые значения
Значения перечисления `ITEM_CONT_*` используются для параметров `slotTypeFrom` и `slotTypeTo`.
:::

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Перемещение предмета между слотами

```lua
containerLib.MoveSlotItem( ITEM_CONT_INVENTORY, 11, ITEM_CONT_INVENTORY, 12 )
```

## Смотрите также

- [ITEM_CONT_*](sadasd)
- [containerLib.CheckMoveSlotItem](sadasd)