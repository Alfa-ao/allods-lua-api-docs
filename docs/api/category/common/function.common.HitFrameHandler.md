# common.HitFrameHandler

Взводит флаг `hit` обработчика события кадра.

[<Badge type="warning" text="16.0.00.49" />](/changelog/16.0.0.md#16.0.0-common.RegisterFrameHandler)

## Описание

```lua
common.HitFrameHandler()
```

Функция взводит флаг `hit` обработчика события кадра. Вызов функции изнутри обработчика события кадра запрещен. В случае отсутствия зарегистрированного обработчика флаг все равно будет взведен, но не будет использоваться в дальнейшем.

Подробная информация об обработчике события кадра представлена в описании функции `common.RegisterFrameHandler`.

## Список параметров

Отсутствуют.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Взведение флага обработчика

```lua
common.HitFrameHandler()
```

## Смотрите также

- [common.RegisterFrameHandler](/api/category/common/function.common.RegisterFrameHandler)