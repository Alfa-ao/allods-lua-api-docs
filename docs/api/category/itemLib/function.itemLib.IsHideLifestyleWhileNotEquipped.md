# itemLib.IsHideLifestyleWhileNotEquipped

Определяет необходимость скрытия предмета в гардеробе до его добавления.

## Описание

```lua
itemLib.IsHideLifestyleWhileNotEquipped( itemId: ObjectId ): boolean
```

Функция проверяет и возвращает признак необходимости скрытия предмета в гардеробе до момента его фактического добавления.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `boolean` - `true`, если предмет необходимо скрывать в гардеробе до его добавления.

## Примеры

### Проверка необходимости скрытия

```lua
local isHide = itemLib.IsHideLifestyleWhileNotEquipped( itemId )
```