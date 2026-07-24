# ValuedTextSafe:SetClassVal

Задает значение для подстановки класса (из тега "rs") для данного ValuedText.

## Описание

```lua
ValuedTextSafe:SetClassVal( key: string | WString, value: string | WString )
```

Задание значения для подстановки класса (из тега "rs") для данного ValuedText.

## Список параметров

- **`key`** (`string` | `WString`) - Тег, для которого устанавливается значение.

- **`value`** (`string` | `WString`) - Устанавливаемое значение.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Базовый вызов

```lua
valuedText:SetClassVal( "log_format", "log_red" )
```