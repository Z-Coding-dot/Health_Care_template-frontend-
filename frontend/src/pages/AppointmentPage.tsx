import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { departments } from '@/data/departments';
import { doctors } from '@/data/doctors';
import { useAppDispatch } from '@/redux/hooks';
import { addToast } from '@/redux/slices/uiSlice';

const schema = z.object({ department: z.string().min(1), doctor: z.string().min(1), date: z.string().min(1), time: z.string().min(1), name: z.string().min(2), email: z.string().email(), phone: z.string().min(7), reason: z.string().min(8) });
type FormValues = z.infer<typeof schema>;

export default function AppointmentPage() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const { register, watch, trigger, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { department: '', doctor: '', date: '', time: '', name: '', email: '', phone: '', reason: '' } });
  const department = watch('department');
  const availableDoctors = doctors.filter((doctor) => doctor.departmentId === department);
  const next = async () => { const fields = ['department', 'doctor', 'date', 'time'] as const; if (await trigger(fields)) setStep(2); };
  const submit = (values: FormValues) => { void values; setSubmitted(true); dispatch(addToast({ message: t('common.success'), tone: 'success' })); };
  return <><PageHero title="appointment.title" description="appointment.description" /><Section><Container className="max-w-3xl"><div className="mb-8 grid grid-cols-3 gap-3">{['appointment.stepOne', 'appointment.stepTwo', 'appointment.stepThree'].map((item, index) => <div key={item} className="flex items-center gap-2 text-sm font-semibold"><span className={`flex size-8 items-center justify-center rounded-full ${step > index || submitted ? 'bg-[var(--color-primary)] text-white' : 'bg-[var(--color-surface)] text-[var(--color-muted)]'}`}>{submitted || step > index ? '✓' : index + 1}</span><span className="hidden sm:inline">{t(item)}</span></div>)}</div>{submitted ? <Card className="p-10 text-center"><CheckCircle2 className="mx-auto text-[var(--color-primary)]" size={48} /><h2 className="heading-2 mt-5">{t('appointment.confirmationTitle')}</h2><p className="mx-auto mt-4 max-w-md text-[var(--color-body)]">{t('appointment.confirmationDescription')}</p></Card> : <Card className="p-6 sm:p-9"><form onSubmit={handleSubmit(submit)}>{step === 1 ? <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-semibold text-[var(--color-ink)]"><span>{t('appointment.chooseDepartment')}</span><select className="input" {...register('department')}><option value="">—</option>{departments.map((item) => <option key={item.id} value={item.id}>{t(item.titleKey)}</option>)}</select>{errors.department && <small className="text-red-700">{t('common.required')}</small>}</label><label className="grid gap-2 text-sm font-semibold text-[var(--color-ink)]"><span>{t('appointment.chooseDoctor')}</span><select className="input" {...register('doctor')}><option value="">—</option>{availableDoctors.map((doctor) => <option key={doctor.id} value={doctor.id}>{doctor.name}</option>)}</select></label><label className="grid gap-2 text-sm font-semibold text-[var(--color-ink)]"><span>{t('appointment.chooseDate')}</span><input className="input" type="date" {...register('date')} /></label><label className="grid gap-2 text-sm font-semibold text-[var(--color-ink)]"><span>{t('appointment.chooseTime')}</span><select className="input" {...register('time')}><option value="">—</option><option>09:00</option><option>11:30</option><option>14:00</option><option>16:30</option></select></label></div> : <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-semibold text-[var(--color-ink)]"><span>{t('common.name')}</span><input className="input" {...register('name')} /></label><label className="grid gap-2 text-sm font-semibold text-[var(--color-ink)]"><span>{t('common.email')}</span><input className="input" type="email" {...register('email')} /></label><label className="grid gap-2 text-sm font-semibold text-[var(--color-ink)]"><span>{t('common.phone')}</span><input className="input" type="tel" {...register('phone')} /></label><label className="grid gap-2 text-sm font-semibold text-[var(--color-ink)] sm:col-span-2"><span>{t('appointment.reason')}</span><textarea className="input min-h-28 py-3" {...register('reason')} /></label></div>}{Object.keys(errors).length > 0 && <p className="mt-5 text-sm text-red-700">{t('common.error')}</p>}<div className="mt-8 flex justify-between gap-3">{step > 1 ? <Button type="button" variant="secondary" onClick={() => setStep(1)}><ArrowLeft size={17} className="rtl:rotate-180" />{t('appointment.previous')}</Button> : <span />}{step === 1 ? <Button type="button" onClick={() => void next()}>{t('appointment.next')}<ArrowRight size={17} className="rtl:rotate-180" /></Button> : <Button type="submit">{t('appointment.confirm')}</Button>}</div></form></Card>}</Container></Section></>;
}
