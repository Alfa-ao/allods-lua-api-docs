# common.GetAddonName

Возвращает имя аддона, в котором выполняется скрипт.

<Badge type="success" text="14.0.01" /> [<Badge type="warning" text="16.0.00.46" />](/changelog/16.0.0.md#16.0.0-common.GetAddonSysName)

## Описание

```lua
common.GetAddonName(): string
```

Функция возвращает имя аддона, в котором выполняется скрипт.

::: warning Замечание
Для пользовательских аддонов возвращается имя из ресурса. Данное имя не является действительным с точки зрения клиента. Для получения действительного системного имени аддона используется функция `common.GetAddonSysName`.
:::

## Список параметров

Параметры отсутствуют.

## Возвращаемые значения

Возвращает `string` - имя аддона, в котором выполняется скрипт.

## Примеры

### Получение имени текущего аддона

```lua
local name = common.GetAddonName() -- LibreAlchemyV2
```

## Смотрите также

- [common.GetAddonSysName](/api/category/common/function.common.GetAddonSysName)