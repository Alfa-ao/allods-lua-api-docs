# avatar.CanActivateItemAlternative
Проверяет возможность активации предмета за счет указанной альтернативной валюты.

## Описание

```lua
avatar.CanActivateItemAlternative( itemId: ObjectId, currencyId: CurrencyId ): boolean
```

Функция проверяет возможность активации предмета за счет указанной альтернативной валюты. Проверка не учитывает нехватку валюты, поскольку при недостатке одного типа для активации может быть одновременно использовано несколько альтернативных валют из списка, получаемого через `itemLib.GetActivatorsAlternative`.

Неактивированные предметы появляются в результате крафта и требуют активации с затратой соответствующей альтернативной валюты в необходимом количестве.

## Список параметров

- **`itemId`** (`ObjectId`) - Уникальный идентификатор предмета.
- **`currencyId`** (`CurrencyId`) - Идентификатор альтернативной валюты.

## Возвращаемые значения

Возвращает `boolean` - `true`, если предмет можно активировать за счет указанной валюты, и `false` в противном случае.

## Примеры

### Проверка возможности активации предмета
```lua
local canActivate = avatar.CanActivateItemAlternative( itemId, currencyId )
```

## Смотрите также

- [avatar.ActivateItemAlternative](/api/category/avatar/function.avatar.ActivateItemAlternative)
- [itemLib.GetActivatorsAlternative](/api/category/itemLib/function.itemLib.GetActivatorsAlternative)
- [itemLib.GetActivationInfo](/api/category/itemLib/function.itemLib.GetActivationInfo)