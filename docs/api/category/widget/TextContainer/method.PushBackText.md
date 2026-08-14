# TextContainerSafe:PushBackText

Добавляет string, WString или ValuedText в конец контейнера.

## Описание

```lua
TextContainerSafe:PushBackText( text: string | WString | ValuedText )
```

Функция добавляет string, WString или ValuedText в конец контейнера. Порядок добавления задается в настройках контейнера. Для добавления string, WString в контейнере должны быть заданы formatFileRef и defaultTag.

## Список параметров

- **`text`** (`string` | `WString` | `ValuedText`) - добавляемый текст.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Добавление форматированного текста в контейнер
```lua
wtTextContainer:PushBackText( common.CreateValuedText( {
    format = wtFormatEdit:GetText(),
    class1 = wtClassEdit:GetText(),
    name1 = wtValueEdit:GetText()
} ) )
```

::: info Описание примера
В примере создается форматированный текст с помощью функции `common.CreateValuedText`, который затем добавляется в конец текстового контейнера.
:::

## Смотрите также

- [common.CreateValuedText](/api/category/common/function.common.CreateValuedText.md)