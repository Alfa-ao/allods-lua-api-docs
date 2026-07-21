# guild.TransferMoney

Производит операцию с деньгами в гильдейском банке.

## Описание

```lua
guild.TransferMoney( sum: number, changeReason: number, direction: number, comment: WString )
```

Функция производит операцию с деньгами в гильдейском банке.

## Список параметров

- **`sum`** (`number`) - Сумма операции в меди.

- **`changeReason`** (`number`) - Причина операции. Значения соответствуют перечислению `ENUM_MoneyChangeReason_...`.

- **`direction`** (`number`) - Направление перевода денег. Значения соответствуют перечислению `ENUM_TransferMoneyOperationDirection_...`.

- **`comment`** (`WString`) - Комментарий при объявлении сбора.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Перевод средств в гильдейский банк

```lua
local comment = userMods.ToWString( "Налог" )
guild.TransferMoney( 10000, ENUM_MoneyChangeReason_TaxPayment, ENUM_TransferMoneyOperationDirection_Avatar2GuildBank, comment )
```

## Смотрите также

- [EnumMoneyChangeReason](#enum-moneychangereason)
- [EnumTransferMoneyOperationDirection](#enum-transfer-money-operation-direction)