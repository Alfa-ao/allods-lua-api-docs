---
outline: deep
---

<!-- <pre class="center-by-longest">
Короткая строка
Очень длинная строка Очень длинная строка Очень длинная строка
Средняя <code>строка</code>
</pre> -->

# Lua API Release

Список изменений в игровом API.


::: success <Badge type="success" text="Release" />

Релиз доступен на боевых серверах.

- [avatar.GetQuestsLimit](#17.0.0-avatar.GetQuestsLimit)
- [matchMaking.CanJoinInstancedEvent](#17.0.0-matchMaking.CanJoinInstancedEvent)
- [common.DelayedCall](#17.0.0-common.DelayedCall)
- [object.GetBuffProducer](#17.0.0-object.GetBuffProducer)
- [spellLib.GetDurationBuffId](#17.0.0-spellLib.GetDurationBuffId)
- [spellLib.GetSysName](#17.0.0-spellLib.GetSysName)
- [EVENT_MANA](#17.0.0-EVENT_MANA)
- [object.GetManaType](#17.0.0-object.GetManaType)
- [unit.GetFollowers](#17.0.0-unit.GetFollowers)
- [unit.IsAvatarRelated](#17.0.0-unit.IsAvatarRelated)
- [casterId](#17.0.0-casterId)
- [Pets](#17.0.0-Pets)
- [EVENT_..._MEMBER_ACTIVE_PET_CHANGED](#17.0.0-..._MEMBER_ACTIVE_PET_CHANGED)

:::

::: tip <Badge type="tip" text="Pre-release" />

Релиз в грядущем обновлении.

- [stateMainForm](#18.0.0-stateMainForm)
- [WidgetSafe](#18.0.0-WidgetSafe) - GetChildChecked, GetChildUnchecked.
- [EVENT_..._EFFECT](#18.0.0-EVENT__EFFECT)
- [spellLib.*DurationBuff](#18.0.0-spellLib._DurationBuff)
- [EVENT_*](#18.0.0-EVENT_*)

:::

::: warning <Badge type="warning" text="Process" />

В процессе. Ожидается в любом из обновлений.

- [UIAddon](#17.0.0-UIAddon)
- [options.GetOptionsByCustom](#17.0.0-options.GetOptionsByCustom)
- [options.Get...Ids](#17.0.0-options.Get...Ids)
- [options.GetOptionInfo](#17.0.0-options.GetOptionInfo)
- [options.SetOptionCurrentIndex](#17.0.0-options.SetOptionCurrentIndex)
- [options.IsOptionEnabled](#17.0.0-options.IsOptionEnabled)
- [UniqueId](#17.0.0-UniqueId)
- [Widget-TextStyle](#17.0.0-Widget-TextStyle)
- [ButtonSafe:GetValuedText](#17.0.0-ButtonSafe:GetValuedText)
- [WidgetCss](#17.0.0-WidgetCss)


:::

::: danger <Badge type="danger" text="Delete" />

Удалено из API.

- [UNIT_MANA](#17.0.0-UNIT_MANA)
- [unit.GetPetName](#17.0.0-unit.GetPetName)

::: 

<!--@include: @/changelog/18.0.0.md-->

<!--@include: @/changelog/17.0.0.md-->

<!--@include: @/changelog/16.0.0.md-->

<!--@include: @/changelog/15.0.0.md-->

Дополняется...