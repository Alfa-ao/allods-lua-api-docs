# avatar.UseItemOnItemAndUseActions
Применяет выбранный предмет к другому предмету и выполняет связанные с этим воздействия.

## Описание
```lua
avatar.UseItemOnItemAndUseActions( sourceItemId: ObjectId, targetItemId: ObjectId, count: ?number, useAction: ?number )
```
Функция инициирует процесс использования предмета `sourceItemId` на предмете `targetItemId`. Для успешного выполнения операции предмет `sourceItemId` должен обладать специальным партом `UseOnItemAndTakeActions`, наличие которого предварительно проверяется функцией `itemLib.IsUseOnItemAndTakeActions`. На целевом предмете `targetItemId` происходит проверка необходимых предикатов и последующее выполнение заданных воздействий.

## Список параметров
- **`sourceItemId`** (`ObjectId`)
Идентификатор предмета, который применяется к другому предмету. Должен иметь парт `UseOnItemAndTakeActions`.
- **`targetItemId`** (`ObjectId`)
Идентификатор предмета, на который отправляется запрос на действие и на котором проверяются предикаты.
- **`count`** (`number`)
Количество используемых предметов из стека `sourceItemId`. Значение по умолчанию — `1`.
- **`useAction`** (`number`)
Индекс (`sysIndex`) выбранного варианта использования (Usage). Значение по умолчанию — `-1`.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Применение предмета к другому предмету
```lua
avatar.UseItemOnItemAndTakeActions( waitingItemId, itemId, 3 )
```
::: info Описание примера
В примере выполняется применение предмета `waitingItemId` к предмету `itemId` в количестве 3 штук. При этом для индекса варианта использования применяется значение по умолчанию.
:::

## Смотрите также
- [itemLib.IsUseOnItemAndTakeActions](itemLib.IsUseOnItemAndTakeActions)