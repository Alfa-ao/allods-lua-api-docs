# TextContainerSafe:PushBackText
Добавляет WString или ValuedText в конец контейнера.

## Описание

```lua
TextContainerSafe:PushBackText( text: WString | ValuedText )
```

Функция добавляет WString или ValuedText в конец контейнера. Порядок добавления задается в настройках контейнера. Для добавления WString в контейнере должны быть заданы formatFileRef и defaultTag.

## Список параметров

- **`text`** (`WString` | `ValuedText`) - добавляемый текст.

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
Создается ValuedText с использованием форматирования и значений из полей ввода, после чего добавляется в текстовый контейнер.
:::

## Смотрите также

- [common.CreateValuedText](/api/category/common/function.common.CreateValuedText.md)