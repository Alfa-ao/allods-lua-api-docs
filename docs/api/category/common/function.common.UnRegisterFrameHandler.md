# common.UnRegisterFrameHandler

Удаляет обработчик события кадра.

[<Badge type="warning" text="16.0.00.49" />](/changelog/16.0.0.md#16.0.0-common.RegisterFrameHandler)

## Описание

```lua
common.UnRegisterFrameHandler()
```

Функция удаляет ранее зарегистрированный обработчик события кадра. Если такой обработчик отсутствует, функция не выполняет никаких действий.

::: tip Совет
Подробнее про регистрацию и работу обработчика события кадра смотри `common.RegisterFrameHandler`.
:::

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Удаление обработчика события кадра

```lua
common.UnRegisterFrameHandler()
```

## Смотрите также

- [common.RegisterFrameHandler](/api/category/common/function.common.RegisterFrameHandler)