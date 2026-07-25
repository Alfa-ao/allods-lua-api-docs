# WidgetSafe:PlayBackground

Запускает анимацию для фонового слоя.

## Описание

```lua
WidgetSafe:PlayBackground( repeatForever: boolean|nil )
```

Функция запускает анимацию фонового слоя. Фоновый слой должен быть представлен типом `WidgetLayerAnimatedTexture`.

::: warning Замечание
Фоновый слой должен быть типа `WidgetLayerAnimatedTexture`.
:::

## Список параметров

- **`repeatForever`** (`boolean` | `nil`) - `true` - повторять анимацию, `false` - проиграть один раз. Необязательный параметр, по умолчанию `false`.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Запуск анимации без повторения

```lua
wtSomeEffect:PlayBackground( false )
```