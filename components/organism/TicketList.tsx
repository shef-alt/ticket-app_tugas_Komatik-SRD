"use client";

import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { Calendar, MapPin, Tag } from "lucide-react";
import Modal from "@/components/organism/Modal";
import Button from "@/components/atoms/Button";
import SkeletonCard from "@/components/molecules/SkeletonCard";
import { useTicket } from "@/store/useTicket";
import { useQuery } from "@tanstack/react-query";

type Ticket = {
  id: number;
  daftarEvent: string;
  imgPath: string;
  category: string;
  tanggal: string;
  tempat: string;
  harga: string;
};

const TicketList = () => {
  const { setTickets, query } = useTicket();

   const {
    data: tickets = [],
    isLoading,
    error,
  } = useQuery<Ticket[]>({
    queryKey: ["tickets"],
    queryFn: async () => {
      const res = await fetch("/api/ticket");

      if (!res.ok) {
        throw new Error("Could not load data.");
      }

      return res.json();
    },
  });

  const filteredTickets = useMemo(
    () =>
      tickets.filter((ticket: Ticket) =>
        ticket.daftarEvent.toLowerCase().includes(query.toLowerCase()),
      ),
    [query, tickets],
  );

  if (isLoading) {
    return (
      <>
        <SkeletonCard />
      </>
    );
  }

  if (error) {
    return <p className="text-center text-xl text-red-400">{error}</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTickets.map((t: Ticket) => (
        <div
          key={t.id}
          className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              fill
              src={t.imgPath}
              alt={t.daftarEvent}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-600 flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {t.category}
            </div>
          </div>

          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
              <Calendar className="w-3 h-3" />
              {new Date(t.tanggal).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-1">
              {t.daftarEvent}
            </h3>
            <div className="flex items-start gap-2 text-sm text-slate-500 mb-4 h-10 line-clamp-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-400" />
              {t.tempat}
            </div>

            <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                  Mulai dari
                </p>
                <p className="text-lg font-extrabold text-indigo">{t.harga}</p>
              </div>
              <Button t={t} />
            </div>
          </div>
        </div>
      ))}
      <Modal />
    </div>
  );
};

export default TicketList;
