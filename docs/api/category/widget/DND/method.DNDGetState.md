# WidgetSafe:DNDGetState

Возвращает состояние виджета в системе drag&drop.

## Описание

```lua
WidgetSafe:DNDGetState(): number
```

Описание всех возможных состояний содержится в перечислении DND_STATE_*.

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `number` (`DND_STATE_*`) - состояние виджета в системе drag&drop.

## Примеры

### Проверка и отмена регистрации виджета

```lua
if wtPanel:DNDGetState() ~= DND_STATE_NOT_REGISTERED then
    wtPanel:DNDUnregister()
end
```

::: info Описание примера
Проверяется текущее состояние виджета. Если виджет зарегистрирован в системе drag&drop, выполняется его отмена регистрации.
:::

## Смотрите также

- [DND_STATE_*](/api/constants/constants.DND_STATE.md)