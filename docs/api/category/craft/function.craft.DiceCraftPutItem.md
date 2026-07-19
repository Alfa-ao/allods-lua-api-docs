# craft.DiceCraftPutItem
Кладёт компонент в заданный слот.

## Описание

```lua
craft.DiceCraftPutItem( itemId: ObjectId, slot: number, count: number )
```

Функция кладёт компонент в заданный слот.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета с нужным компонентом.

- **`slot`** (`number`) - Номер слота, отсчитывается от 0.

- **`count`** (`number`) - Количество компонентов.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Размещение компонента

```lua
craft.DiceCraftPutItem( itemId, slot, count )
```