# common.CreateValuedObject
Создает и возвращает новый экземпляр `ValuedObject`.

## Описание
```lua
common.CreateValuedObject( text: WString|ValuedText, table: table, handledMouseButtons: ?number, handledMouseButtonsDbl: ?number ): ValuedObject
```
Функция создает новый экземпляр `ValuedObject` и позволяет указать таблицу, которая передается в обработчик сообщения при клике или наведении курсора мыши на объект. Также предоставляет возможность переназначить клавиши мыши, вызывающие сообщение о клике. Если клавиша исключается из обработки, объект становится прозрачным для клика данной клавишей мыши.

::: warning Замечание
Поскольку `ValuedObject` является `userdata`, Lua работает с ним по ссылке, а не по значению.
:::

## Список параметров
- **`text`** (`WString` | `ValuedText`)
Текстовое описание, впоследствии получаемое из `ValuedObject` методом `GetText()`.

- **`table`** (`table`)
Таблица произвольного вида, содержащая элементы простых типов (`boolean`, `number`, `string`, `WString`, `table`). Впоследствии получается из `ValuedObject` методом `GetId()`.

- **`handledMouseButtons`** (`?number`)
Битовая маска (`MOUSE_BUTTON_*`), задающая набор клавиш мыши, обрабатываемых при одинарном клике по объекту. По умолчанию обрабатываются все клавиши.

- **`handledMouseButtonsDbl`** (`?number`)
Битовая маска (`MOUSE_BUTTON_*`), задающая набор клавиш мыши, обрабатываемых при двойном клике по объекту. По умолчанию обрабатываются все клавиши.

## Возвращаемые значения
Возвращает `ValuedObject` — новый экземпляр `ValuedObject`.

## Примеры
### Создание базового ValuedObject с таблицей данных
```lua
local valuedObject = common.CreateValuedObject( text, { a = 1, b = "b", c = { 1, 2 } } )
```

### Создание ValuedObject с обработкой только левой кнопки мыши
```lua
local valuedObjectLeftClick = common.CreateValuedObject( text, {}, MOUSE_BUTTON_LEFT )
```

### Создание ValuedObject с обработкой правой и средней кнопок мыши
```lua
local valuedObjectNotLeftClick = common.CreateValuedObject( text, {}, common.GetBitOr( MOUSE_BUTTON_RIGHT, MOUSE_BUTTON_MIDDLE ) )
```
::: info Описание примера
С помощью функции `common.GetBitOr` формируется битовая маска для правой и средней кнопок мыши. Создается объект, реагирующий только на указанные клавиши, оставаясь прозрачным для клика левой кнопкой.
:::

## Смотрите также
- [common.GetBitOr](common.GetBitOr)
- [MOUSE_BUTTON_*](constants.common#mouse-button)
- [ValuedObject:GetText](ValuedObject.GetText)
- [ValuedObject:GetId](ValuedObject.GetId)