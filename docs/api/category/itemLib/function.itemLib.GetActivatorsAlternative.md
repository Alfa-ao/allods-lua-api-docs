# itemLib.GetActivatorsAlternative

Извлекает список альтернативных валют, которыми можно оплатить активацию данного предмета.

## Описание

```lua
itemLib.GetActivatorsAlternative( itemId: ObjectId ): table|nil
```

Функция извлекает и возвращает список альтернативных валют, которыми можно оплатить активацию указанного предмета. Если информация отсутствует, возвращается `nil`.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `table` | `nil` - `nil`, если нет информации; иначе список (индексируемый от `0`) идентификаторов (`CurrencyId`) альтернативных валют, которые можно потратить на активацию предмета.

## Примеры

### Получение списка альтернативных валют

```lua
local activators = itemLib.GetActivatorsAlternative( itemId )
```

## Смотрите также

- [CurrencyId](CurrencyId)
- [avatar.ActivateItemAlternative](function.avatar.ActivateItemAlternative)