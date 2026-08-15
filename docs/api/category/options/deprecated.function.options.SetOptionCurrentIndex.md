# options.SetOptionCurrentIndex

Задает новое значение для опции.

## Описание

::: danger <Badge type="danger" text="^17.1.*" /> <Badge type="danger" text="^18.0.0" /> <Badge type="warning" text="Process" />

Функция удалена.

```lua
options.SetOptionCurrentIndex( optionId: ObjectId, index: number )
```

:::

Устанавливает новое значение опции, которое будет использовано при выполнении команды Apply.

## Список параметров

- **`optionId`** (`ObjectId`) - Идентификатор опции.

- **`index`** (`number`) - Новое значение для опции для дискретного типа данных.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

```lua
options.SetOptionCurrentIndex( optionId, index )
```