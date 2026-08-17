# options.SetOptionCurrentIndex

Задает новое значение для опции.

## Описание

::: danger Deprecated

VERSION: [<Badge type="warning" text="^17.1.*" />](/index.md#17.0.0-options.SetOptionCurrentIndex) [<Badge type="warning" text="^18.0.0" />](/index.md#17.0.0-options.SetOptionCurrentIndex) <Badge type="warning" text="Process" />

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