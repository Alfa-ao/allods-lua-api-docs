# avatar.ActivateItemAlternative
Активирует предмет с использованием альтернативных валют.

## Описание

```lua
avatar.ActivateItemAlternative( itemId: ObjectId )
```

Неактивированные предметы могут появляться в результате крафта. Для их дальнейшей эксплуатации требуется обязательная активация, которая расходует определённые альтернативные валюты из инвентаря персонажа. Функция инициирует процесс активации предмета с заданным идентификатором.

## Список параметров

- **`itemId`** (`ObjectId`) - Уникальный идентификатор предмета, который необходимо активировать.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Активация предмета из инвентаря

```lua
avatar.ActivateItemAlternative( itemId )
```

## Смотрите также

- [itemLib.GetActivatorsAlternative](/api/category/itemLib/function.itemLib.GetActivatorsAlternative.md)
- [itemLib.GetActivationInfo](/api/category/itemLib/function.itemLib.GetActivationInfo.md)
- [avatar.CanActivateItemAlternative](/api/category/avatar/function.avatar.CanActivateItemAlternative.md)