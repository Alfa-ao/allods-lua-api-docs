# itemLib.GetBindingInfo

Извлекает информацию о привязке предмета.

## Описание

```lua
itemLib.GetBindingInfo( itemId: ObjectId ): table|nil
```

Функция извлекает и возвращает таблицу с информацией о привязке указанного предмета.

## Список параметров

- **`itemId`** (`ObjectId`) - Идентификатор предмета.

## Возвращаемые значения

Возвращает `table` | `nil`.

При успешном получении информации возвращается таблица со следующими полями:

- **`isBound`** (`boolean`) - Флаг, указывающий на привязку предмета к аватару.

- **`binding`** (`number`(`ITEM_BINDING_*`)) - Тип привязки предмета к аватару.

- **`guildBound`** (`number` | `nil`) - Идентификатор гильдии, к которой привязан предмет.

- **`bindDescription`** (`WString` | `nil`) - Специальный вопрос, отображаемый перед привязыванием предмета.

## Примеры

### Получение описания привязки

```lua
local itemBinding = itemLib.GetBindingInfo( itemId )
local bindDescription = itemBinding and itemBinding.bindDescription
```

## Смотрите также

- [ITEM_BINDING_...](#)