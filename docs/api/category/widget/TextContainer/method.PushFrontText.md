# TextContainerSafe:PushFrontText

Добавляет string, WString или ValuedText в начало контейнера.

## Описание

```lua
TextContainerSafe:PushFrontText( text: string | WString | ValuedText )
```

Функция добавляет string, WString или ValuedText в начало контейнера. Порядок добавления задается в настройках контейнера. Для добавления string, WString в контейнере должны быть заданы formatFileRef и defaultTag.

## Список параметров

- **`text`** (`string` | `WString` | `ValuedText`) - добавляемый текст.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Добавление форматированного текста

```lua
wtTextContainer:PushFrontText( common.CreateValuedText( {
    format = wtFormatEdit:GetText(),
    class1 = wtClassEdit:GetText(),
    name1 = wtValueEdit:GetText()
} ) )
```

::: info Описание примера
В примере создается форматированный текст с помощью функции `common.CreateValuedText`, который затем добавляется в начало текстового контейнера.
:::

## Смотрите также

- [common.CreateValuedText](/api/category/common/function.common.CreateValuedText.md)