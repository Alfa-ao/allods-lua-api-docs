# TextContainerSafe:InsertText

Вставляет в заданную позицию контейнера строку или ValuedText в зависимости от типа входного параметра.

## Описание

```lua
TextContainerSafe:InsertText( position: number, text: WString | ValuedText )
```

Осуществляет вставку строки или ValuedText в указанную позицию контейнера.

## Список параметров

- **`position`** (`number`) - Позиция, в которую необходимо вставить текст. Счет начинается с `0`.

- **`text`** (`WString` | `ValuedText`) - Добавляемый текст.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Вставка ValuedText на заданную позицию

```lua
wtTextContainer:InsertText( 3, wtValueEdit:GetText() )
```

::: info Описание примера
Выполняется вставка текста, полученного из элемента `wtValueEdit`, в контейнер `wtTextContainer` на четвертую позицию (индекс 3).
:::