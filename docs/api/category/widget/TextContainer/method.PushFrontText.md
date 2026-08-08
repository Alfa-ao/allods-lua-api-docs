# TextContainerSafe:PushFrontText

Добавляет WString или ValuedText в начало контейнера.

## Описание

```lua
TextContainerSafe:PushFrontText( text: WString | ValuedText )
```

Порядок добавления задается в настройках контейнера. Для добавления WString в контейнере должны быть заданы formatFileRef и defaultTag.

## Список параметров

- **`text`** (`WString` | `ValuedText`) - добавляемый текст.

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