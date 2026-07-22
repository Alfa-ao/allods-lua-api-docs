# loot.SetLootScheme

Задает схему дележа лута.

## Описание

```lua
loot.SetLootScheme( scheme: number )
```

Функция задает схему дележа лута.

## Список параметров

- **`scheme`** (`number`(`LOOT_SCHEME_TYPE_*`)) - Тип лут схемы.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка схемы дележа лута

```lua
local scheme = LOOT_SCHEME_TYPE_MASTER
loot.SetLootScheme( scheme )
```

## Смотрите также

- [LOOT_SCHEME_TYPE_*](#)