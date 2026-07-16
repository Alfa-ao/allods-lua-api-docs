# avatar.UseItemAndTakeActions
Использует выбранный предмет и выполняет связанные с ним воздействия.

## Описание
```lua
avatar.UseItemAndTakeActions( itemId: ObjectId, count: ?number, useAction: ?number )
```
Функция инициирует использование предмета с заданным идентификатором и выполняет действия, соответствующие его типу. Перед вызовом рекомендуется убедиться, что предмет поддерживает данное действие, с помощью функции `itemLib.IsUseItemAndTakeActions`.

::: warning Замечание
Предмет, передаваемый в параметре `itemId`, обязан иметь парт `UseItemAndTakeActions`. Наличие данного парта проверяется функцией `itemLib.IsUseItemAndTakeActions`.
:::

## Список параметров
- **`itemId`** (`ObjectId`)
Идентификатор предмета, который необходимо использовать.
- **`count`** (`number`)
Количество предметов из стека, подвергаемых использованию. По умолчанию принимает значение `1`.
- **`useAction`** (`number`)
Индекс (`sysIndex`) выбранного действия использования (`Usage`). По умолчанию принимает значение `-1`.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Использование предметов из стека
```lua
avatar.UseItemAndTakeActions( itemId, 42 )
```
::: info Описание примера
Выполняется использование 42 единиц предмета с указанным идентификатором `itemId`. Конкретное действие использования не задается явно, поэтому применяется значение по умолчанию.
:::

## Смотрите также
- [itemLib.IsUseItemAndTakeActions](itemLib.IsUseItemAndTakeActions)
- [avatar.UseItemOnItemAndTakeActions](avatar.UseItemOnItemAndTakeActions)